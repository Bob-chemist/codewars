function nbYear(p0, percent, aug, p) {
    var population = p0;
    var numberOfYears=0;
    while (p > population){
    population += (population*percent/100 + aug);
    ++numberOfYears;
    }
    return numberOfYears;
}