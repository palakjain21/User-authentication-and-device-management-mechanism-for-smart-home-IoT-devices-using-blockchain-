pragma solidity ^0.8.9;
pragma experimental ABIEncoderV2;

contract AuthenticationContract {
    uint256 count = 0; //count for all the tokens

    address[] admins; // admins of the system
    struct Admin {
        address id;
        bytes32 name;
    }
    Admin[] adminList; // list of all the admins
    struct Token {
        // struct for the information of a given token
        bytes32 UID;
        address user;
        address dev;
        address fog;
    }
    struct Devices {
        // struct for the addresses of devices
        address dev;
        address fog;
        bytes32 name;
    }
    Token[] public Tokens; // array of all tokens issued
    // mapping for users and their accessable devices
    mapping(address => bytes32) public user_names;
    mapping(address => Devices[]) public users_devices;
    // mapping for devices at a fog node
    mapping(address => address[]) public fog_devices;
    mapping(address => bytes32) public device_names;
    modifier onlyAdmin() {
        // for user check at modifications
        bool admin = false;
        for (uint256 i = 0; i < admins.length; i++) {
            if (msg.sender == admins[i]) {
                admin = true;
                break;
            }
        }
        if (!admin) {
            require(false, "Only admins can modify this contract");
        } else _;
    }

    // function AuthenticationContract() {
    //     admins.push(msg.sender); //creater of contract is the first admin
    // }

    constructor() public {
        admins.push(msg.sender); //creater of contract is the first admin
    }

    // list user devices
    // function listDevices(address user, address fog) public view returns (Devices[] memory) {
    //     Devices[] memory devices= users_devices[user];
    //     //filter devices bases on fog node
    //     for (uint256 i = 0; i < devices.length; i++) {
    //         if(devices[i].fog)
    //     }
    // }

    // list fog devices
    function listFogDevices(address fog)
        public
        view
        returns (Devices[] memory)
    {
        bool admin = false;
        for (uint256 i = 0; i < admins.length; i++) {
            if (msg.sender == admins[i]) {
                admin = true;
                break;
            }
        }
        if (!admin) {
            // list all devices at a fog node filter by user
            Devices[] memory devices = users_devices[msg.sender];
            Devices[] memory fogFilteredDevices = new Devices[](devices.length);
            for (uint256 i = 0; i < devices.length; i++) {
                if (devices[i].fog == fog) {
                    fogFilteredDevices[i] = devices[i];
                }
            }
            return fogFilteredDevices;
        }

        address[] memory deviceAdd = fog_devices[fog];
        Devices[] memory returnValue = new Devices[](deviceAdd.length);
        //get device names in Devices struct
        for (uint256 i = 0; i < deviceAdd.length; i++) {
            returnValue[i].dev = deviceAdd[i];
            returnValue[i].fog = fog;
            returnValue[i].name = device_names[deviceAdd[i]];
        }
        return returnValue;
    }

    // adding admin by other admins
    function addAdmin(address newAdmin) public onlyAdmin {
        admins.push(newAdmin);
        emit AdminAdded(newAdmin, msg.sender);
    }

    function addAdminv2(address add, bytes32 name) public onlyAdmin {
        admins.push(add);
        Admin memory newAdmin;
        newAdmin.id = add;
        newAdmin.name = name;
        adminList.push(newAdmin);
        emit AdminAdded(add, msg.sender);
    }

    // adds a device to a given user by admin
    function addUserDeviceMapping(
        address user,
        address device,
        address fog,
        bytes32 name,
        bytes32 user_name
    ) public onlyAdmin {
        //only admin can add users and devices
        bool deviceExists = false;
        for (uint256 i = 0; i < fog_devices[fog].length; i++) {
            // Check if device is added to a fog already otherwise it doesn't exist
            if (fog_devices[fog][i] == device) {
                // check the devices of a user
                // device is mapped to a fog
                // fog=users_devices[msg.sender][i].fog;
                deviceExists = true;
                break;
            }
        }
        bool userExists = false;
        bytes32 userName = user_names[user];
        if (userName[0] != 0) {
            userExists = true;
        }
        if (deviceExists) {
            if (!userExists) {
                user_names[user] = user_name;
            }
            users_devices[user].push(Devices(device, fog, name));
            emit UserDeviceMappingAdded(user, device, msg.sender, fog);
        } else emit DeviceDoesnotExist(device, fog, msg.sender);
    }

    // adds a device to a given fog node
    function addDeviceFogMapping(address fog, address device) public onlyAdmin {
        //only admin can add users and devices
        fog_devices[fog].push(device);
        emit FogDeviceMappingAdded(fog, device, msg.sender);
    }

    // to share the addition of new admin by who
    event AdminAdded(address newAdmin, address addingAdmin);
    // to share new mapping for user-device mapping added by who
    event UserDeviceMappingAdded(
        address user,
        address device,
        address addingAdmin,
        address fog
    );
    // to share new fog-device mapping added by who
    event FogDeviceMappingAdded(
        address fog,
        address device,
        address addingAdmin
    );
    // to share the requested device doesn't exist on the system
    event DeviceDoesnotExist(address device, address fog, address sender);

    // delete a given admin
    function delAdmin(address admin) public onlyAdmin {
        if (admins.length < 2) {
            require(false, "You can't delete the last admin");
        } else {
            uint256 i = 0;
            while (i < admins.length) {
                if (admins[i] == admin) {
                    delete admins[i];
                    emit AdminDeleted(admin, msg.sender);
                }
                i++;
            }
        }
    }

    // delete user access to all devices
    function delUser(address user) public onlyAdmin {
        delete users_devices[user];
        emit UserDeviceAllMappingDeleted(user, msg.sender);
    }

    // delete devices at a fog node
    function delDev(address fog) public onlyAdmin {
        delete fog_devices[fog];
        emit FogDeviceAllMappingDeleted(fog, msg.sender);
    }

    // to share the deletion of an new admin by who
    event AdminDeleted(address newAdmin, address deletingAdmin);
    // to share the deletion of all user-device mapping of a user added by who
    event UserDeviceAllMappingDeleted(address user, address deletingAdmin);
    // to share the deletion all fog-device mapping of a fog  by who
    event FogDeviceAllMappingDeleted(address fog, address deletingAdmin);

    // authetnication request
    function requestAuthentication(address device, address fog) public {
        // Check if device exists in fog-device mapping
        bool deviceExists = false;
        for (uint256 i = 0; i < fog_devices[fog].length; i++) {
            if (fog_devices[fog][i] == device) {
                // check the devices of a user
                // device is mapped to a fog
                //   fog=users_devices[msg.sender][i].fog;
                deviceExists = true;
                break;
            }
        }
        if (!deviceExists) {
            //trigger DeviceDoesnotExist event
            emit DeviceDoesnotExist(device, fog, msg.sender);
        } else {
            bool auth = false;
            for (uint256 m = 0; m < users_devices[msg.sender].length; m++) {
                if (users_devices[msg.sender][m].dev == device) {
                    // if we find device we need to find the fog it belongs to
                    auth = true;
                    break;
                }
            }
            if (auth) {
                // shares successful authentication event
                emit Authenticated(msg.sender, device, fog);
                bytes32 UID = keccak256(
                    abi.encodePacked(device, fog, msg.sender, block.timestamp)
                );
                Tokens.push(Token(UID, msg.sender, device, fog));
                emit TokenCreated(UID, msg.sender, device, fog);
            } else if (!auth) {
                // trigger failed authentication event
                emit NotAuthenticated(msg.sender);
            }
        }
    }

    // authentication events
    event Authenticated(address user, address device, address fog);
    event NotAuthenticated(address user);
    event TokenCreated(bytes32 uid, address user, address device, address fog);
}
