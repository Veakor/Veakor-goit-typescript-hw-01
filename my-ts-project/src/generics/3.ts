function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
    return { ...objA, ...objB };
  }
  interface ObjA {
    a: number;
  }
  
  interface ObjB {
    b: string;
  }
  
  const objA: ObjA = { a: 1 };
  const objB: ObjB = { b: 'hello' };
  
  const mergedObj = merge(objA, objB);
  console.log(mergedObj);   