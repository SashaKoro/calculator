
describe('Calculator', function() {
	describe('calculatorTest', function() {
    this.timeout(200);
		it('Should be a function', function () {
    		expect(calculatorTest).to.be.a('function');
  		});
		it('expects "0 + 0 - 5" to return -5', function() {
			expect(calculatorTest("0 + 0 - 5")).to.equal(-5);
		});
		it('expects "1 + 7 / 2" to return 4.5', function() {
			expect(calculatorTest("1 + 7 / 2")).to.equal(4.5);
		});
		it('expects "24 / 2 * 6" to return 72', function() {
			expect(calculatorTest("24 / 2 * 6")).to.equal(72);
		});
		it('expects "300.75 - .25 * 3" to return 300', function() {
			expect(calculatorTest("300.75 - .25 * 3")).to.equal(300);
		});
		it('expects "2 / 0" to return "Infinity"', function() {
			expect(calculatorTest("2 / 0")).to.equal(Infinity);
		});
		it('expects ".25 * .25" to return 0.0625', function() {
			expect(calculatorTest(".25 * .25")).to.equal(0.0625);
		});				
	});
});
describe('Frankulator', function() {
  describe('squareRootRun', function() {
    this.timeout(200);
	  it('Should be a function', function () {
    	expect(squareRootRun).to.be.a('function');
  	});   
    it('expects blank string to prompt Please enter a number', function() {
      expect(squareRootRun()).to.equal("Please enter a number");
    });      	
  	it('expects squareroot of 0 to be 0', function() {
  		expect(squareRootRun(0)).to.equal(0);
  	});
  	it('expects squareroot of 1 to be 1', function() {
  		expect(squareRootRun(1)).to.equal(1);
  	});
  	it('expects squareroot of 49 to be 7', function() {
  		expect(squareRootRun(49)).to.equal(7);
  	});
  	it('expects squareroot of .25 to be 0.5', function() {
  		expect(squareRootRun(.25)).to.equal(0.5);
  	});  	
  	it('expects squareroot of "0" to be 0', function() {
  		expect(squareRootRun("0")).to.equal(0);
  	});
  	it('expects squareroot of "1" to be 1', function() {
  		expect(squareRootRun("1")).to.equal(1);
  	});
  	it('expects squareroot of "49" to be 7', function() {
  		expect(squareRootRun("49")).to.equal(7);
  	});
  	it('expects squareroot of ".25" to be 0.5', function() {
  		expect(squareRootRun(".25")).to.equal(0.5);
  	});
  });
  describe('squareRun', function() {
    this.timeout(200);
	  it('Should be a function', function () {
    	expect(squareRun).to.be.a('function');
  	});     	
    it('expects blank string to prompt Please enter a number', function() {
      expect(squareRun()).to.equal("Please enter a number");
    });     
  	it('expects square of 0 to be 0', function() {
  		expect(squareRun(0)).to.equal(0);
  	});
  	it('expects square of 1 to be 1', function() {
  		expect(squareRun(1)).to.equal(1);
  	});
  	it('expects square of 25 to be 625', function() {
  		expect(squareRun(25)).to.equal(625);
  	});
  	it('expects square of .25 to be .0625', function() {
  		expect(squareRun(.25)).to.equal(.0625);
  	});
  	it('expects square of "0" to be 0', function() {
  		expect(squareRun("0")).to.equal(0);
  	});
  	it('expects square of "1" to be 1', function() {
  		expect(squareRun("1")).to.equal(1);
  	});
  	it('expects square of "25" to be 625', function() {
  		expect(squareRun("25")).to.equal(625);
  	});
  	it('expects square of ".25" to be .0625', function() {
  		expect(squareRun(".25")).to.equal(.0625);
  	});
  });
  describe('percentageRun', function() {
    this.timeout(200);
	  it('Should be a function', function () {
    	expect(percentageRun).to.be.a('function');
  	});     	
    it('expects blank string to prompt Please enter a number', function() {
      expect(percentageRun()).to.equal("Please enter a number");
    });             
  	it('expects percentage of 7890.00 to be 78.9', function() {
  		expect(percentageRun(7890.00)).to.equal(78.9);
  	});
  	it('expects percentage of 0 to be 0', function() {
  		expect(percentageRun(0)).to.equal(0);
  	});
  	it('expects percentage of 1 to be 0.01', function() {
  		expect(percentageRun(1)).to.equal(0.01);
  	}); 
  	it('expects percentage of 4312 to be 43.12', function() {
  		expect(percentageRun(4312)).to.equal(43.12);
  	});
  	it('expects percentage of .1134 to be 0.001134', function() {
  		expect(percentageRun(.1134)).to.equal(0.001134);
  	});
  	it('expects percentage of "7890.00" to be 78.9', function() {
  		expect(percentageRun("7890.00")).to.equal(78.9);
  	});
  	it('expects percentage of "0" to be 0', function() {
  		expect(percentageRun("0")).to.equal(0);
  	});
  	it('expects percentage of "1" to be 0.01', function() {
  		expect(percentageRun("1")).to.equal(0.01);
  	}); 
  	it('expects percentage of "4312" to be 43.12', function() {
  		expect(percentageRun("4312")).to.equal(43.12);
  	});
  	it('expects percentage of ".1134" to be 0.001134', function() {
  		expect(percentageRun(".1134")).to.equal(0.001134);
  	});     	   		
  }); 
  describe('factorialCheck', function() {
    this.timeout(200);
	  it('Should be a function', function () {
    	expect(factorialCheck).to.be.a('function');
  	});  
    it('expects blank string to prompt Please enter a number', function() {
      expect(factorialCheck()).to.equal("Please enter a number");
    });  
    it('expects decimal number to prompt Number must be an Integer', function() {
      expect(factorialCheck(2.5)).to.equal("Number must be an Integer");
    });            	
  	it('expects the factorial of 0 to be 1', function() {
  		expect(factorialCheck(0)).to.equal(1);
  	});
    it('expects the factorial of 1 to be 1', function() {
  		expect(factorialCheck(1)).to.equal(1);
  	});
  	it('expects the factorial of 2 to be 2', function() {
  		expect(factorialCheck(2)).to.equal(2);
  	});
  	it('expects the factorial of 5 to be 120', function() {
  		expect(factorialCheck(5)).to.equal(120);
  	});
  	it('expects the factorial of 11 to be 39916800', function() {
  		expect(factorialCheck(11)).to.equal(39916800);
  	});
  	it('expects the factorial of "0" to be 1', function() {
  		expect(factorialCheck("0")).to.equal(1);
  	});
    it('expects the factorial of "1" to be 1', function() {
  		expect(factorialCheck("1")).to.equal(1);
  	});
  	it('expects the factorial of "2" to be 2', function() {
  		expect(factorialCheck("2")).to.equal(2);
  	});
  	it('expects the factorial of "5" to be 120', function() {
  		expect(factorialCheck("5")).to.equal(120);
  	});
  	it('expects the factorial of "11" to be 39916800', function() {
  		expect(factorialCheck("11")).to.equal(39916800);
  	});
  });     
  describe('ifPrime', function() {
    this.timeout(200); 
	  it('Should be a function', function () {
    	expect(ifPrime).to.be.a('function');
  	});  	
  	it('expects 0 to not be a prime number', function() {
  		expect(ifPrime(0)).to.equal("0 is NOT prime");
  	});
  	it('expects "0" to not be a prime number', function() {
  		expect(ifPrime("0")).to.equal("0 is NOT prime");
  	});
    it('expects decimal number to prompt Number must be an Integer', function() {
      expect(ifPrime(2.5)).to.equal("Number must be an Integer");
    });      
  	it('expects blank string to prompt Please enter a number', function() {
  		expect(ifPrime()).to.equal("Please enter a number");
  	});
  	it('expects string w/ alpha chars. to prompt Please enter a number', function() {
    	expect(ifPrime("abcDEF")).to.equal("Please enter a number");
    });
    it('expects 1 to not be a prime number', function() {
    	expect(ifPrime(1)).to.equal("1 is NOT prime");
    });
    it('expects 2 to be a prime number', function() {
  		expect(ifPrime(2)).to.equal("2 is prime");
  	});
    it('expects 3 to be a prime number', function() {
    	expect(ifPrime(3)).to.equal("3 is prime");
    });
    it('expects 4 to not be a prime number', function() {
  		expect(ifPrime(4)).to.equal("4 is NOT prime");
  	});
    it('expects 445309093234258 to be too long', function() {
    	expect(ifPrime(445309093234258)).to.equal("Sorry, number is too long");
    });
    it('expects 104743 to be a prime number', function() {
    	expect(ifPrime(104743)).to.equal("104743 is prime");
    });
    it('expects "1" to not be a prime number', function() {
    	expect(ifPrime("1")).to.equal("1 is NOT prime");
    });
    it('expects "2" to be a prime number', function() {
  		expect(ifPrime("2")).to.equal("2 is prime");
  	});
    it('expects "3" to be a prime number', function() {
    	expect(ifPrime("3")).to.equal("3 is prime");
    });
    it('expects "4" to not be a prime number', function() {
  		expect(ifPrime("4")).to.equal("4 is NOT prime");
  	});
    it('expects "445309093234258" to be too long', function() {
    	expect(ifPrime("445309093234258")).to.equal("Sorry, number is too long");
    });
    it('expects "104743" to be a prime number', function() {
    	expect(ifPrime("104743")).to.equal("104743 is prime");
    });
  });
  describe("largestPrimeFactorSearch", function() {
  	this.timeout(200);
	  it('Should be a function', function () {
    	expect(largestPrimeFactorSearch).to.be.a('function');
  	});   
    it('expects blank string to prompt Please enter a number', function() {
      expect(largestPrimeFactorSearch()).to.equal("Please enter a number");
    }); 
    it('expects decimal number to prompt Number must be an Integer', function() {
      expect(largestPrimeFactorSearch(2.5)).to.equal("Number must be an Integer");
    });            	
  	it('expects 0 to have no prime factor', function() {
  		expect(largestPrimeFactorSearch(0)).to.equal("No prime factor");
  	});
  	it('expects 1 to have no prime factor', function() {
  		expect(largestPrimeFactorSearch(1)).to.equal("No prime factor");
  	});
  	it('expects 2 to have no prime factor', function() {
  		expect(largestPrimeFactorSearch(2)).to.equal("No prime factor");
  	});
  	it('expects 3 to have no prime factor', function() {
  		expect(largestPrimeFactorSearch(3)).to.equal("No prime factor");
  	});
  	it('expects largest prime factor of 4 to be 2', function() {
  		expect(largestPrimeFactorSearch(4)).to.equal(2);
  	});
  	it('expects largest prime factor of 49 to be 7', function() {
  		expect(largestPrimeFactorSearch(49)).to.equal(7);
  	});
  	it('expects largest prime factor of 324252 to be 9007', function() {
  		expect(largestPrimeFactorSearch(324252)).to.equal(9007);
  	});
  	it('expects "0" to have no prime factor', function() {
  		expect(largestPrimeFactorSearch("0")).to.equal("No prime factor");
  	});
  	it('expects "1" to have no prime factor', function() {
  		expect(largestPrimeFactorSearch("1")).to.equal("No prime factor");
  	});
  	it('expects "2" to have no prime factor', function() {
  		expect(largestPrimeFactorSearch("2")).to.equal("No prime factor");
  	});
  	it('expects "3" to have no prime factor', function() {
  		expect(largestPrimeFactorSearch("3")).to.equal("No prime factor");
  	});
  	it('expects largest prime factor of "4" to be 2', function() {
  		expect(largestPrimeFactorSearch("4")).to.equal(2);
  	});
  	it('expects largest prime factor of "49" to be 7', function() {
  		expect(largestPrimeFactorSearch("49")).to.equal(7);
  	});
  	it('expects largest prime factor of "324252" to be 9007', function() {
  		expect(largestPrimeFactorSearch("324252")).to.equal(9007);
  	});  	
  });  
  describe("sumOfPrimesGenerator", function() {
  	this.timeout(200);
	  it('Should be a function', function () {
    	expect(sumOfPrimesGenerator).to.be.a('function');
  	});   
    it('expects blank string to prompt Please enter a number', function() {
      expect(sumOfPrimesGenerator()).to.equal("Please enter a number");
    });        	
  	it('expects sum of primes under 0 to be 0', function() {
  		expect(sumOfPrimesGenerator(0)).to.equal(0);
  	});
  	it('expects sum of primes under 1 to be 0', function() {
  		expect(sumOfPrimesGenerator(1)).to.equal(0);
  	});
  	it('expects sum of primes under 2 to be 0', function() {
  		expect(sumOfPrimesGenerator(2)).to.equal(0);
  	});
  	it('expects sum of primes under 3 to be 2', function() {
  		expect(sumOfPrimesGenerator(3)).to.equal(2);
  	});
  	it('expects sum of primes under 4 to be 5', function() {
  		expect(sumOfPrimesGenerator(4)).to.equal(5);
  	});
  	it('expects sum of primes under 9 to be 17', function() {
  		expect(sumOfPrimesGenerator(9)).to.equal(17);
  	});
 	  it('expects sum of primes under 100 to be 1060', function () {
 		  expect(sumOfPrimesGenerator(100)).to.equal(1060);
	  });
  	it('expects sum of primes under "0" to be 0', function() {
  		expect(sumOfPrimesGenerator("0")).to.equal(0);
  	});
  	it('expects sum of primes under "1" to be 0', function() {
  		expect(sumOfPrimesGenerator("1")).to.equal(0);
  	});
  	it('expects sum of primes under "2" to be 0', function() {
  		expect(sumOfPrimesGenerator("2")).to.equal(0);
  	});
  	it('expects sum of primes under "3" to be 2', function() {
  		expect(sumOfPrimesGenerator("3")).to.equal(2);
  	});
  	it('expects sum of primes under "4" to be 5', function() {
  		expect(sumOfPrimesGenerator("4")).to.equal(5);
  	});
  	it('expects sum of primes under "9" to be 17', function() {
  		expect(sumOfPrimesGenerator("9")).to.equal(17);
  	});
 	it('expects sum of primes under "100" to be 1060', function() {
 		expect(sumOfPrimesGenerator("100")).to.equal(1060);	
	});
  });  
  describe('triangularNumberGenerator', function() {
    this.timeout(200);
	  it('Should be a function', function () {
    	expect(triangularNumberGenerator).to.be.a('function');
  	});    
    it('expects blank string to prompt Please enter a number', function() {
      expect(triangularNumberGenerator()).to.equal("Please enter a number");
    });  
    it('expects decimal number to prompt Number must be an Integer', function() {
      expect(triangularNumberGenerator(2.5)).to.equal("Number must be an Integer");
    });            	
  	it('expects 1 to be triangular', function() {
  		expect(triangularNumberGenerator(1)).to.equal("1 is a tri number");
  	});
  	it('expects 3 to be triangular', function() {
  		expect(triangularNumberGenerator(3)).to.equal("3 is a tri number");
  	});
  	it('expects 55 to be triangular', function() {
  		expect(triangularNumberGenerator(55)).to.equal("55 is a tri number");
  	});
  	it('expects 76576500 to be triangular', function() {
  		expect(triangularNumberGenerator(76576500)).to.equal("76576500 is a tri number");
  	});
  	it('expects 34532452345 to NOT be triangular', function() {
  		expect(triangularNumberGenerator(34532452345)).to.equal("34532452345 is NOT tri");
  	});
  	it('expects 60 to NOT be triangular', function() {
  		expect(triangularNumberGenerator(60)).to.equal("60 is NOT tri");
  	});
  	it('expects "1" to be triangular', function() {
  		expect(triangularNumberGenerator("1")).to.equal("1 is a tri number");
  	});
  	it('expects "3" to be triangular', function() {
  		expect(triangularNumberGenerator("3")).to.equal("3 is a tri number");
  	});
  	it('expects "55" to be triangular', function() {
  		expect(triangularNumberGenerator("55")).to.equal("55 is a tri number");
  	});
  	it('expects "76576500" to be triangular', function() {
  		expect(triangularNumberGenerator("76576500")).to.equal("76576500 is a tri number");
  	});
  	it('expects "34532452345" to NOT be triangular', function() {
  		expect(triangularNumberGenerator("34532452345")).to.equal("34532452345 is NOT tri");
  	});
  	it('expects "60" to NOT be triangular', function() {
  		expect(triangularNumberGenerator("60")).to.equal("60 is NOT tri");
  	});   	 	
  });
  describe('divisorCounter', function() {
    this.timeout(200);
	  it('Should be a function', function () {
    	expect(divisorCounter).to.be.a('function');
  	});     
    it('expects blank string to prompt Please enter a number', function() {
      expect(divisorCounter()).to.equal("Please enter a number");
    });   
    it('expects decimal number to prompt Number must be an Integer', function() {
      expect(divisorCounter(2.5)).to.equal("Number must be an Integer");
    });         	
  	it('expects 0 to have an infinite number of divisors', function() {
  		expect(divisorCounter(0)).to.equal("infinite number of divisors");
  	});
  	it('expects 1 to have 1 divisor', function() {
  		expect(divisorCounter(1)).to.equal(1);
  	});
  	it('expects 2 to have 2 divisors', function() {
  		expect(divisorCounter(2)).to.equal(2);
  	});
  	it('expects 4 to have 3 divisors', function() {
  		expect(divisorCounter(4)).to.equal(3);
  	});
  	it('expects 9007 to have 2 divisors', function() {
  		expect(divisorCounter(9007)).to.equal(2);
  	});
  	it('expects 28 to have 6 divisors', function() {
  		expect(divisorCounter(28)).to.equal(6);
  	});
  	it('expects 213400 to have 168 divisors', function() {
  		expect(divisorCounter(4200000)).to.equal(168);
  	});	
  	it('expects "0" to have an infinite number of divisors', function() {
  		expect(divisorCounter("0")).to.equal("infinite number of divisors");
  	});
  	it('expects "1" to have 1 divisor', function() {
  		expect(divisorCounter("1")).to.equal(1);
  	});
  	it('expects "2" to have 2 divisors', function() {
  		expect(divisorCounter("2")).to.equal(2);
  	});
  	it('expects "4" to have 3 divisors', function() {
  		expect(divisorCounter("4")).to.equal(3);
  	});
  	it('expects "9007" to have 2 divisors', function() {
  		expect(divisorCounter("9007")).to.equal(2);
  	});
  	it('expects "28" to have 6 divisors', function() {
  		expect(divisorCounter("28")).to.equal(6);
  	});
  	it('expects "213400" to have 168 divisors', function() {
  		expect(divisorCounter("4200000")).to.equal(168);
  	});	
  });
  describe('collatzTry', function() {
    this.timeout(200);
	  it('Should be a function', function () {
    	expect(collatzTry).to.be.a('function');
  	});    
    it('expects blank string to prompt Please enter a number', function() {
      expect(collatzTry()).to.equal("Please enter a number");
    });  
    it('expects decimal number to prompt Number must be an Integer', function() {
      expect(collatzTry(2.5)).to.equal("Number must be an Integer");
    });          	
  	it('expects 0 to not be a positive integer', function() {
  		expect(collatzTry(0)).to.equal("Input must be a positive integer");
  	});
  	it('expects 1 to have a collatz chain of 0 steps', function() {
  		expect(collatzTry(1)).to.equal(0);
  	});
  	it('expects 2 to have a collatz chain of 1 step', function() {
  		expect(collatzTry(2)).to.equal(1);
  	});
  	it('expects 13 to have a collatz chain of 9 steps', function() {
  		expect(collatzTry(13)).to.equal(9);
  	});
  	it('expects 837799 to have a collatz chain of 524 steps', function() {
  		expect(collatzTry(837799)).to.equal(524);
  	});
  	it('expects "0" to not be a positive integer', function() {
  		expect(collatzTry("0")).to.equal("Input must be a positive integer");
  	});
  	it('expects "1" to have a collatz chain of 0 steps', function() {
  		expect(collatzTry("1")).to.equal(0);
  	});
  	it('expects "2" to have a collatz chain of 1 step', function() {
  		expect(collatzTry("2")).to.equal(1);
  	});
  	it('expects "13" to have a collatz chain of 9 steps', function() {
  		expect(collatzTry("13")).to.equal(9);
  	});
  	it('expects "837799" to have a collatz chain of 524 steps', function() {
  		expect(collatzTry("837799")).to.equal(524);
  	});
  });
  describe('fibGenerator', function() {
    this.timeout(200);
	  it('Should be a function', function () {
    	expect(fibGenerator).to.be.a('function');
  	});     
    it('expects blank string to prompt Please enter a number', function() {
      expect(fibGenerator()).to.equal("Please enter a number");
    });       	
  	it('expects sum of fibonacci numbers under 0 to be 0', function() {
  		expect(fibGenerator(0)).to.equal(0);
  	});
  	it('expects sum of fibonacci numbers under 1 to be 0', function() {
  		expect(fibGenerator(1)).to.equal(0);
  	});
  	it('expects sum of fibonacci numbers under 2 to be 2', function() {
  		expect(fibGenerator(2)).to.equal(2);
  	});  
  	it('expects sum of fibonacci numbers under 7 to be 12', function() {
  		expect(fibGenerator(7)).to.equal(12);
  	});
  	it('expects sum of fibonacci numbers under 20 to be 33', function() {
  		expect(fibGenerator(20)).to.equal(33);
  	});
  	it('expects sum of fibonacci numbers under 89 to be 143', function() {
  		expect(fibGenerator(89)).to.equal(143);
  	}); 
  	it('expects sum of fibonacci numbers under "0" to be 0', function() {
  		expect(fibGenerator("0")).to.equal(0);
  	});
  	it('expects sum of fibonacci numbers under "1" to be 0', function() {
  		expect(fibGenerator("1")).to.equal(0);
  	});
  	it('expects sum of fibonacci numbers under "2" to be 2', function() {
  		expect(fibGenerator("2")).to.equal(2);
  	});  
  	it('expects sum of fibonacci numbers under "7" to be 12', function() {
  		expect(fibGenerator("7")).to.equal(12);
  	});
  	it('expects sum of fibonacci numbers under "20" to be 33', function() {
  		expect(fibGenerator("20")).to.equal(33);
  	});
  	it('expects sum of fibonacci numbers under "89" to be 143', function() {
  		expect(fibGenerator("89")).to.equal(143);
  	});   		
  });
  describe('digitSumCounter', function() {
    this.timeout(200);
	  it('Should be a function', function () {
    	expect(digitSumCounter).to.be.a('function');
  	});  
    it('expects blank string to prompt Please enter a number', function() {
      expect(digitSumCounter()).to.equal("Please enter a number");
    });          	
  	it('expects sum of digits of 0 to be 0', function() {
  		expect(digitSumCounter(0)).to.equal(0);
  	});
  	it('expects sum of digits of 10101 to be 3', function() {
  		expect(digitSumCounter(10101)).to.equal(3);
  	});
  	it('expects sum of digits of 98511100002 to be 27', function() {
  		expect(digitSumCounter(98511100002)).to.equal(27);
  	});
  	it('expects sum of digits of 1234567890 to be 45', function() {
  		expect(digitSumCounter(1234567890)).to.equal(45);
  	}); 
  	it('expects sum of digits of "0" to be 0', function() {
  		expect(digitSumCounter("0")).to.equal(0);
  	});
  	it('expects sum of digits of "10101" to be 3', function() {
  		expect(digitSumCounter("10101")).to.equal(3);
  	});
  	it('expects sum of digits of "98511100002" to be 27', function() {
  		expect(digitSumCounter("98511100002")).to.equal(27);
  	});
  	it('expects sum of digits of "1234567890" to be 45', function() {
  		expect(digitSumCounter("1234567890")).to.equal(45);
  	});   	  	  	
  });
  describe('semiPrimeGenerator', function() {
    this.timeout(200);
	  it('Should be a function', function () {
    	expect(semiPrimeGenerator).to.be.a('function');
  	});    
    it('expects blank string to prompt Please enter a number', function() {
      expect(semiPrimeGenerator()).to.equal("Please enter a number");
    });   
    it('expects decimal number to prompt Number must be an Integer', function() {
      expect(semiPrimeGenerator(2.5)).to.equal("Number must be an Integer");
    });             	
  	it('expects 0 to not be a semiPrime', function() {
  		expect(semiPrimeGenerator(0)).to.equal("0 is NOT a semiprime");
  	});
  	it('expects 1 to not be a semiPrime', function() {
  		expect(semiPrimeGenerator(1)).to.equal("1 is NOT a semiprime");
  	});
  	it('expects 4 to be a semiPrime', function() {
  		expect(semiPrimeGenerator(4)).to.equal("4 is a semiprime");
  	});   		
  	it('expects 65 to be a semiPrime', function() {
  		expect(semiPrimeGenerator(65)).to.equal("65 is a semiprime");
  	});
  	it('expects 88 to not be a semiPrime', function() {
  		expect(semiPrimeGenerator(88)).to.equal("88 is NOT a semiprime");
  	}); 
  	it('expects 94 to be a semiPrime', function() {
  		expect(semiPrimeGenerator(94)).to.equal("94 is a semiprime");
  	});
  	it('expects 897413 to not be a semiPrime', function() {
  		expect(semiPrimeGenerator(897413)).to.equal("897413 is NOT a semiprime");
  	});  	
  	it('expects "0" to not be a semiPrime', function() {
  		expect(semiPrimeGenerator('0')).to.equal("0 is NOT a semiprime");
  	});
  	it('expects "1" to not be a semiPrime', function() {
  		expect(semiPrimeGenerator('1')).to.equal("1 is NOT a semiprime");
  	});
  	it('expects "65" to be a semiPrime', function() {
  		expect(semiPrimeGenerator('65')).to.equal("65 is a semiprime");
  	});
  	it('expects "88" to not be a semiPrime', function() {
  		expect(semiPrimeGenerator('88')).to.equal("88 is NOT a semiprime");
  	});   	
  	it('expects "94" to be a semiPrime', function() {
  		expect(semiPrimeGenerator('94')).to.equal("94 is a semiprime");
  	});   	  	
  }); 
  describe('chenPrimeGenerator', function() {
    this.timeout(200);
	  it('Should be a function', function () {
    	expect(chenPrimeGenerator).to.be.a('function');
  	});   
    it('expects blank string to prompt Please enter a number', function() {
      expect(chenPrimeGenerator()).to.equal("Please enter a number");
    });    
    it('expects decimal number to prompt Number must be an Integer', function() {
      expect(chenPrimeGenerator(2.5)).to.equal("Number must be an Integer");
    });              	
  	it('expects 0 to not be Prime', function() {
  		expect(chenPrimeGenerator(0)).to.equal("0 is NOT prime");
  	});
  	it('expects 4 to not be Prime', function() {
  		expect(chenPrimeGenerator(4)).to.equal("4 is NOT prime");
  	});   		
  	it('expects 67 to be a chenPrime', function() {
  		expect(chenPrimeGenerator(67)).to.equal("67 is a chenprime");
  	});
  	it('expects 73 to be a non-chenPrime', function() {
  		expect(chenPrimeGenerator(73)).to.equal("73 is a non-chen prime");
  	});   	
  	it('expects 101 to be a chenPrime', function() {
  		expect(chenPrimeGenerator(101)).to.equal("101 is a chenprime");
  	});  	
  	it('expects 105 to not be Prime', function() {
  		expect(chenPrimeGenerator(105)).to.equal("105 is NOT prime");
  	});
  	it('expects 241 to be a non-chenPrime', function() {
  		expect(chenPrimeGenerator(241)).to.equal("241 is a non-chen prime");
  	});  	
  	it('expects "0" to not be Prime', function() {
  		expect(chenPrimeGenerator('0')).to.equal("0 is NOT prime");
  	});
  	it('expects "4" to not be Prime', function() {
  		expect(chenPrimeGenerator('4')).to.equal("4 is NOT prime");
  	});
  	it('expects "67" to be a chenPrime', function() {
  		expect(chenPrimeGenerator('67')).to.equal("67 is a chenprime");
  	});   	
  	it('expects "73" to be a non-chenPrime', function() {
  		expect(chenPrimeGenerator('73')).to.equal("73 is a non-chen prime");
  	});   	  	
  });  
  describe('goodPrimeGenerator', function() {
    this.timeout(200);
	  it('Should be a function', function () {
    	expect(goodPrimeGenerator).to.be.a('function');
  	});  
    it('expects blank string to prompt Please enter a number', function() {
      expect(goodPrimeGenerator()).to.equal("Please enter a number");
    });   
    it('expects decimal number to prompt Number must be an Integer', function() {
      expect(goodPrimeGenerator(2.5)).to.equal("Number must be an Integer");
    });                       	
  	it('expects 0 to not be Prime', function() {
  		expect(goodPrimeGenerator(0)).to.equal("0 is NOT prime");
  	});
  	it('expects 2 to be a non-good Prime', function() {
  		expect(goodPrimeGenerator(2)).to.equal("2 is a non-good prime");
  	});   		
  	it('expects 53 to be a good Prime', function() {
  		expect(goodPrimeGenerator(53)).to.equal("53 is a good prime");
  	});
  	it('expects 89 to be a non-good Prime', function() {
  		expect(goodPrimeGenerator(89)).to.equal("89 is a non-good prime");
  	});   	
  	it('expects 149 to be a good Prime', function() {
  		expect(goodPrimeGenerator(149)).to.equal("149 is a good prime");
  	}); 
  	it('expects 120 to not be Prime', function() {
  		expect(goodPrimeGenerator(120)).to.equal("120 is NOT prime");
  	});   	
  	it('expects "0" to not be Prime', function() {
  		expect(goodPrimeGenerator("0")).to.equal("0 is NOT prime");
  	});
  	it('expects "2" to be a non-good Prime', function() {
  		expect(goodPrimeGenerator("2")).to.equal("2 is a non-good prime");
  	});   		
  	it('expects "53" to be a good Prime', function() {
  		expect(goodPrimeGenerator("53")).to.equal("53 is a good prime");
  	});
  	it('expects "89" to be a non-good Prime', function() {
  		expect(goodPrimeGenerator("89")).to.equal("89 is a non-good prime");
  	});   
  	it('expects "120" to not be Prime', function() {
  		expect(goodPrimeGenerator("120")).to.equal("120 is NOT prime");
  	});   	  		
  	it('expects "149" to be a good Prime', function() {
  		expect(goodPrimeGenerator("149")).to.equal("149 is a good prime");
  	});    	 	 	  	
  });   
  describe('woodallGenerator', function() {
    this.timeout(200);
    it('Should be a function', function () {
      expect(woodallGenerator).to.be.a('function');
    });   
    it('expects blank string to prompt Please enter a number', function() {
      expect(woodallGenerator()).to.equal("Please enter a number");
    });  
    it('expects decimal number input to prompt Number must be an integer', function() {
      expect(woodallGenerator('.123')).to.equal("Number must be an Integer");
    });
    it('expects Woodall number of 1 to be 1', function() {
      expect(woodallGenerator('1')).to.equal(1);
    });
    it('expects Woodall number of 2 to be 7', function() {
      expect(woodallGenerator('2')).to.equal(7);
    }); 
    it('expects Woodall number of 7 to be 895', function() {
      expect(woodallGenerator('7')).to.equal(895);
    });    
  });     
});


