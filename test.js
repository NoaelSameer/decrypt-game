const newKeyData = {
    key1: ["1"],
    key2: ["2"],
    key3: [],
    key4: [],
    key5: [],
  };
  
  const keys = ["key1", "key2", "key3", "key4", "key5"];
  keys.sort(() => Math.random() - 0.5);
  
  const shuffledObject = {};
  keys.forEach(key => {
    shuffledObject[key] = newKeyData[key];
  });
  
  console.log(shuffledObject);
  