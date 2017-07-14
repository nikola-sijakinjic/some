describe("HTTP assertions", function () {
  it("should make HTTP assertions easy", function () {
    var response = chakram.get("http://localhost:3000/");
    expect(response).to.have.status(200);
    return chakram.wait();
  });
}); 