function getFilesToBackup(lastBackup, changes) {
  const arr = [];

  changes.forEach(([id, timestamp]) => timestamp > lastBackup && (arr[id] = id));

  return arr.filter((a) => a);
}
