Office.onReady(() => {
  console.log("[EXCITE] > Functions loaded")

  // Associate the function
  CustomFunctions.associate("TEST", test)
})

/**
 * test function
 * @customfunction
 * @volatile
 */
function test(): string {
  console.log("[EXCITE] > TEST FUNCTION")
  return Date.now().toString()
}
