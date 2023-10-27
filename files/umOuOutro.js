function umOuOutro(boolean1, boolean2, boolean3) {
  // Count how many of the arguments are true
  const trueCount = (boolean1 ? 1 : 0) + (boolean2 ? 1 : 0) + (boolean3 ? 1 : 0);

  // Check if exactly one of them is true
  return trueCount === 1;
}