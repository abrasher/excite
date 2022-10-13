Office.onReady(() => {
  console.log("[EXCITE] > Commands loaded")

  // Associate the actions
  Office.actions.associate("testCommand", testCommand)
})

// These do not like to be expressed like  "export const fnName = () => {}"
export async function testCommand(event: any): Promise<void> {
  console.log("[EXCITE] > TEST COMMAND > ", event)

  Excel.run(async (context) => {
    const range = context.workbook.getSelectedRange()
    range.format.fill.color = "green"
    await context.sync()
  })

  event.completed()
}
