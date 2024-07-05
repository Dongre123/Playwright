
// List of Locator:
//Locators | Playwright

// 1.  page.getByAltText() - The alt attribute is commonly used with image elements to provide alternative text descriptions.

// 2. page.getByPlaceholder() - The getByPlaceholder() method is used to locate elements on a webpage by their placeholder text attribute, 
//    which is commonly used in input fields to provide a hint to the user about what to enter in the field.

// 3. page.getByRole() - The page.getByRole() method in Playwright is used to find elements on a webpage by their role (like button, link, heading) and other attributes.

// 4. page.getByLabel() - The page.getByLabel() method in Playwright is used to locate form elements (like input fields, checkboxes, etc.) by their associated label text.

//5. page.getByTitle() - The page.getByTitle() method in Playwright is used to locate elements on a webpage by their title attribute. 
//   The title attribute is often used to provide additional information about an element, typically displayed as a tooltip when the user hovers over the element.

// 6. page.getByTestId() - to locate an element based on its data-testid attribute (other attributes can be configured).

//==============================================================================================================================================================================

// List of assertions:

// await expect(locator).toBeAttached()	Element is attached
// await expect(locator).toBeChecked()	Checkbox is checked
// await expect(locator).toBeDisabled()	Element is disabled
// await expect(locator).toBeEditable()	Element is editable
// await expect(locator).toBeEmpty()	Container is empty
// await expect(locator).toBeEnabled()	Element is enabled
// await expect(locator).toBeFocused()	Element is focused
// await expect(locator).toBeHidden()	Element is not visible
// await expect(locator).toBeInViewport()	Element intersects viewport
// await expect(locator).toBeVisible()	Element is visible
// await expect(locator).toContainText()	Element contains text
// await expect(locator).toHaveAccessibleDescription()	Element has a matching accessible description
// await expect(locator).toHaveAccessibleName()	Element has a matching accessible name
// await expect(locator).toHaveAttribute()	Element has a DOM attribute
// await expect(locator).toHaveClass()	Element has a class property
// await expect(locator).toHaveCount()	List has exact number of children
// await expect(locator).toHaveCSS()	Element has CSS property
// await expect(locator).toHaveId()	Element has an ID
// await expect(locator).toHaveJSProperty()	Element has a JavaScript property
// await expect(locator).toHaveRole()	Element has a specific ARIA role
// await expect(locator).toHaveScreenshot()	Element has a screenshot
// await expect(locator).toHaveText()	Element matches text
// await expect(locator).toHaveValue()	Input has a value
// await expect(locator).toHaveValues()	Select has options selected
// await expect(page).toHaveScreenshot()	Page has a screenshot
// await expect(page).toHaveTitle()	Page has a title
// await expect(page).toHaveURL()	Page has a URL
// await expect(response).toBeOK()	Response has an OK status

//================================================================================================================================================================

// Built-in fixtures:

// Fixture	     Type	               Description
// page	         Page	                     Isolated page for this test run.
// context	     BrowserContext	             Isolated context for this test run. The page fixture belongs to this context as well. Learn how to configure context.
// browser	     Browser	                 Browsers are shared across tests to optimize resources. Learn how to configure browser.
// browserName	 string	                     The name of the browser currently running the test. Either chromium, firefox or webkit.
// request	     APIRequestContext	         Isolated APIRequestContext instance for this test run.

//=================================================================================================================================================================

// Text input:

// Using locator.fill() is the easiest way to fill out the form fields. It focuses the element and triggers an input event with the entered text. It works for <input>, <textarea> and [contenteditable] elements.

// // Text input
// await page.getByRole('textbox').fill('Peter');

// // Date input
// await page.getByLabel('Birth date').fill('2020-02-02');

// // Time input
// await page.getByLabel('Appointment time').fill('13:15');

// // Local datetime input
// await page.getByLabel('Local time').fill('2020-03-02T05:15');

//=========================================================================================================================================================================

// Checkboxes and radio buttons:

// Using locator.setChecked() is the easiest way to check and uncheck a checkbox or a radio button. This method can be used with input[type=checkbox], input[type=radio] and [role=checkbox] elements.

// // Check the checkbox
// await page.getByLabel('I agree to the terms above').check();

// // Assert the checked state
// expect(page.getByLabel('Subscribe to newsletter')).toBeChecked();

// // Select the radio button
// await page.getByLabel('XL').check();

//==============================================================================================================================================================================

// Select options:

// Selects one or multiple options in the <select> element with locator.selectOption(). You can specify option value, or label to select. Multiple options can be selected.

// // Single selection matching the value or label
// await page.getByLabel('Choose a color').selectOption('blue');

// // Single selection matching the label
// await page.getByLabel('Choose a color').selectOption({ label: 'Blue' });

// // Multiple selected items
// await page.getByLabel('Choose multiple colors').selectOption(['red', 'green', 'blue']);

//===============================================================================================================================================================================

// Mouse click:

// Performs a simple human click.

// // Generic click
// await page.getByRole('button').click();

// // Double click
// await page.getByText('Item').dblclick();

// // Right click
// await page.getByText('Item').click({ button: 'right' });

// // Shift + click
// await page.getByText('Item').click({ modifiers: ['Shift'] });

// // Ctrl + click or Windows and Linux
// // Meta + click on macOS
// await page.getByText('Item').click({ modifiers: ['ControlOrMeta'] });

// // Hover over element
// await page.getByText('Item').hover();

// // Click the top left corner
// await page.getByText('Item').click({ position: { x: 0, y: 0 } });

//===============================================================================================================================================================================

// Keys and shortcuts:

// // Hit Enter
// await page.getByText('Submit').press('Enter');

// // Dispatch Control+Right
// await page.getByRole('textbox').press('Control+ArrowRight');

// // Press $ sign on keyboard
// await page.getByRole('textbox').press('$');

//=============================================================================================================================================

// Upload files
// You can select input files for upload using the locator.setInputFiles() method. It expects first argument to point to an input element with the type "file". Multiple files can be passed in the array. If some of the file paths are relative, they are resolved relative to the current working directory. Empty array clears the selected files.

// // Select one file
// await page.getByLabel('Upload file').setInputFiles(path.join(__dirname, 'myfile.pdf'));

// // Select multiple files
// await page.getByLabel('Upload files').setInputFiles([
//   path.join(__dirname, 'file1.txt'),
//   path.join(__dirname, 'file2.txt'),
// ]);

// // Select a directory
// await page.getByLabel('Upload directory').setInputFiles(path.join(__dirname, 'mydir'));

// // Remove all the selected files
// await page.getByLabel('Upload file').setInputFiles([]);

// // Upload buffer from memory
// await page.getByLabel('Upload file').setInputFiles({
//   name: 'file.txt',
//   mimeType: 'text/plain',
//   buffer: Buffer.from('this is test')
// });

//=============================================================================================================================================


// Focus element:

// For the dynamic pages that handle focus events, you can focus the given element with locator.focus().

// await page.getByLabel('Password').focus();
//====================================================================================================================

// Drag and Drop:

// You can perform drag&drop operation with locator.dragTo(). This method will:

// Hover the element that will be dragged.
// Press left mouse button.
// Move mouse to the element that will receive the drop.
// Release left mouse button.
// await page.locator('#item-to-be-dragged').dragTo(page.locator('#item-to-drop-at'));
//====================================================================================================================

// Dragging manually:

// If you want precise control over the drag operation, use lower-level methods like locator.hover(), mouse.down(), mouse.move() and mouse.up().

// await page.locator('#item-to-be-dragged').hover();
// await page.mouse.down();
// await page.locator('#item-to-drop-at').hover();
// await page.mouse.up();

//====================================================================================================================

// Screenshots:

// Introduction
// Here is a quick way to capture a screenshot and save it into a file:

// await page.screenshot({ path: 'screenshot.png' });

// Screenshots API accepts many parameters for image format, clip area, quality, etc. Make sure to check them out.

// Full page screenshots:

// Full page screenshot is a screenshot of a full scrollable page, as if you had a very tall screen and the page could fit it entirely.

// await page.screenshot({ path: 'screenshot.png', fullPage: true });

// Capture into buffer:

// Rather than writing into a file, you can get a buffer with the image and post-process it or pass it to a third party pixel diff facility.

// const buffer = await page.screenshot();
// console.log(buffer.toString('base64'));

// Element screenshot:

// Sometimes it is useful to take a screenshot of a single element.

// await page.locator('.header').screenshot({ path: 'screenshot.png' });

//===================================================================================================================================================================