
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount : 300000, 
    years : 30, 
    rate : 6
  };
  expect(calculateMonthlyPayment(values)).toEqual('1798.65');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount : 100,
    years : 2,
    rate: 3
  };
  expect(calculateMonthlyPayment(values)).toEqual('4.30');
})
