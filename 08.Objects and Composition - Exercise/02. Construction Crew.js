function workerCondition(worker) {

    if (worker.dizziness) {
        worker.levelOfHydrated += (0.1 * worker.weight * worker.experience);
        worker.dizziness = false;
    }

    return worker;
}

workerCondition({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}


)