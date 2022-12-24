function checkStepNumbers(systemNames, stepNumbers) {
  for (let i = 0; i < systemNames.length / 2; i++) {
    for (let j = i + 1; j < systemNames.length; j++) {
      if (systemNames[j] == systemNames[i] && stepNumbers[j] < stepNumbers[i]) {
        return false;
      }
    }
  }
  return true;
}
