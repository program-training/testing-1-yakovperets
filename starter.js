//////////////
//1
export function stringLength(a: string) {
  return a.length;
}
export function isPalindrome(str: string): boolean {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const reversedStr = str.split("").reverse().join("");

  return str === reversedStr;
}
//3
export function sortNumbersLowToHigh(numbers: number[]) {
  return numbers.sort(function (a, b) {
    return a - b;
  });
}
//4
export function calculateSquareRoot(number: number): number | string {
  if (number >= 0) {
    return Math.sqrt(number);
  } else {
    return "nagative numbers have not sqrt";
  }
}
//5
export function sumArray(numbers: number[]): number {
  return numbers.reduce((sum, current) => sum + current, 0);
}
//6
export const fetchUserData = async (userId: number) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch user data. Status: ${response.status}`);
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching user data: ${error.message}`);
    } else {
      throw new Error(`Error fetching user data: ${error}`);
    }
  }
};
//7
export function getNextFibonacciNumber(
  fibonacciArray: number[]
): number | string {
  const length = fibonacciArray.length;

  if (length < 2) {
    throw new Error(
      "Input is not a valid Fibonacci sequence. It should contain at least two numbers."
    );
  }

  const secondLast = fibonacciArray[length - 2];
  const last = fibonacciArray[length - 1];
  const next = secondLast + last;

  if (next === last) {
    throw new Error(
      "Input is not a valid Fibonacci sequence. It does not follow the Fibonacci pattern."
    );
  }

  return next;
}
////////////////////
//////////////
//1
export function stringLength(a: string) {
  return a.length;
}
export function isPalindrome(str: string): boolean {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const reversedStr = str.split("").reverse().join("");

  return str === reversedStr;
}
//3
export function sortNumbersLowToHigh(numbers: number[]) {
  return numbers.sort(function (a, b) {
    return a - b;
  });
}
//4
export function calculateSquareRoot(number: number): number | string {
  if (number >= 0) {
    return Math.sqrt(number);
  } else {
    return "nagative numbers have not sqrt";
  }
}
//5
export function sumArray(numbers: number[]): number {
  return numbers.reduce((sum, current) => sum + current, 0);
}
//6
export const fetchUserData = async (userId: number) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch user data. Status: ${response.status}`);
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching user data: ${error.message}`);
    } else {
      throw new Error(`Error fetching user data: ${error}`);
    }
  }
};
//7
export function getNextFibonacciNumber(
  fibonacciArray: number[]
): number | string {
  const length = fibonacciArray.length;

  if (length < 2) {
    throw new Error(
      "Input is not a valid Fibonacci sequence. It should contain at least two numbers."
    );
  }

  const secondLast = fibonacciArray[length - 2];
  const last = fibonacciArray[length - 1];
  const next = secondLast + last;

  if (next === last) {
    throw new Error(
      "Input is not a valid Fibonacci sequence. It does not follow the Fibonacci pattern."
    );
  }

  return next;
}
