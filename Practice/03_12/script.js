/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Backpack from "./Backpack.js";
class Laptop {
    constructor(
        brand,
        model,
        cpu,
        storageCapacity,
        memory,
        audioJack,
        usbTypeA,
        usbTypeB,
        usbTypeC,
        ethernetPort,
        sdCardReader,
        microSDCardReader,
        hdmiPort,
        displayPort,
        otherPorts,
        fingerprintSensor,
        faceRecognition
    ) {
        this.brand = brand;
        this.model = model;
        this.cpu = cpu;
        this.storageCapacity = storageCapacity;
        this.memory = memory;
        this.ports = {
            audioJack: audioJack,
            usbTypeA: usbTypeA,
            usbTypeB: usbTypeB,
            usbTypeC: usbTypeC,
            ethernetPort: ethernetPort,
            sdCardReader: sdCardReader,
            microSDCardReader: microSDCardReader,
            hdmiPort: hdmiPort,
            displayPort: displayPort,
            otherPorts: otherPorts,
        };
        this.fingerprintSensor = fingerprintSensor;
        this.faceRecognition = faceRecognition;
    }

    changeStorageCapacity(newCapacity) {
        this.storageCapacity = newCapacity;
    }
    changeMemory(newMemory) {
        this.memory = this.memory;
    }
}

export default Laptop;

const myLaptop = new Laptop('Dell', 'XPS 13 9300', 'i7', '1 TB', '16 GB', 1, 0, 0, 2, 0, 0, 1, 0 ,0, null, true, true);
console.log("My Laptop object:", myLaptop);
console.log("My Laptop storage capacity:", myLaptop.storageCapacity);
myLaptop.changeStorageCapacity("2 TB");
console.log("My new Laptop storage capacity:", myLaptop.storageCapacity);

const myBackpack = new Backpack("hahabag", 40, 'blue', 10, 20, 21, true);
console.log(myBackpack);
