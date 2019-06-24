

interface KeyPair {
    key: number;
    value: string;
}

let kv1: KeyPair = { key:1, value:"Hemant" }; // OK

let kv2: KeyPair = { key:1, val:"Sontosh" }; // Compiler Error: 'val' doesn't exist in type 'KeyPair'

let kv3: KeyPair = { key:1, value:100 }; // Compiler Error: 

