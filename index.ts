// Question 145
function executeCallback(
    callback: (arg1: number, arg2: number) => void,
    arg1: number,
    arg2: number
  ): void {
    callback(arg1, arg2); // Invokes the callback with the specified arguments
  }
  
  const add = (a: number, b: number) => {
    console.log(a + b); // Outputs the sum of a and b
  };
  
  executeCallback(add, 5, 3); 

// Question 146
const number:number[] = [4,5,6,7,8];
const filterednumber:number[] = number.filter((num)=>num>5);
console.log(filterednumber);

// Question 147
function fetchData(
  callback: (error: Error | null, data?: string) => void
): void {
  // Simulating an error condition
  const error = new Error("Failed to fetch data");
  const data = "Some data";

  // Simulate fetching data with a chance of error
  if (Math.random() > 0.5) {
    callback(null, data); // No error, data is fetched successfully
  } else {
    callback(error); // Passes error to the callback
  }
}

// Using the fetchData function with error handling in the callback
fetchData((error, data) => {
  if (error) {
    console.error(error.message); // Handles the error
  } else {
    console.log(data); // Processes the data
  }
});