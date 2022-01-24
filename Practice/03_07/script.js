/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const student = {
    name: "Thirvan Somanah",
    age: 20
}

const laptop = {
    brand: "Dell",
    model: "XPS 13 9300",
    cpu: "i7",
    storageCapacity: "1 TB",
    memory: "16 GB",
    ports: {
        USBTypeA: 0,
        USBTypeB: 0,
        USBTypeC: 2,
        ethernetPort: 0,
        sdCardReader: 0,
        microSdCardReader: 1,
        HDMIPort: 0,
        displayPort: 0,
        others: null
    },
    fingerPrintSensor: true
}