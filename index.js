var vehicletype;
(function (vehicletype) {
    vehicletype[vehicletype["car"] = 0] = "car";
    vehicletype[vehicletype["bus"] = 1] = "bus";
    vehicletype[vehicletype["truck"] = 2] = "truck";
})(vehicletype || (vehicletype = {}));
console.log(vehicletype.truck);
