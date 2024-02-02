pm.test("Статус ответа 200", function () {
    pm.response.to.have.status(200);
}); 


pm.test("Пол человека мужской", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.gender).to.eql("male");
});


pm.test("Время ответа меньше 400ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(400);
});


pm.test("Age есть в хедерах", function () {
    pm.response.to.have.header("Age");
});


pm.test("Имя планеты Endor", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("Endor");
});


pm.test("Вид Body соответствует ожидаемому", function () {
    pm.response.to.have.body({
    "name": "Endor",
    "rotation_period": "18",
    "orbital_period": "402",
    "diameter": "4900",
    "climate": "temperate",
    "gravity": "0.85 standard",
    "terrain": "forests, mountains, lakes",
    "surface_water": "8",
    "population": "30000000",
    "residents": [
        "https://swapi.py4e.com/api/people/30/"
    ],
    "films": [
        "https://swapi.py4e.com/api/films/3/"
    ],
    "created": "2014-12-10T11:50:29.349000Z",
    "edited": "2014-12-20T20:58:18.429000Z",
    "url": "https://swapi.py4e.com/api/planets/7/"
});
});


pm.test("Название статуса ответа ОК", function () {
    pm.response.to.have.status("OK");
});


pm.test("Размер Body менее 1024 B", function () {
    pm.expect(pm.response.responseSize).to.be.below(1024);
});


pm.test("В body ответа содержится значение Sentinel-class landing craft", function () {
    pm.expect(pm.response.text()).to.include("Sentinel-class landing craft");
});


pm.test("Значение crew 5", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.crew).to.eql("5");