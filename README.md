## ERROR PAGES

| Element to test | Test procedure | Expected outcome | Pass/Fail |
| --- | --- | --- | --- |
| restricted endpoints | edit other users suggestion through endpoint URL | Throw 403 | pass |
|  | delete other users suggestion through endpoint URL | Throw 403 | fail |
|  | View other users suggestion through endpoint URL | Throw 403 | fail |
| nonexistent endpoints | type link+/aösdjknas | Throw 404 | pass |
| servererror | plant a bug and run page | Throw 500 | pass |

## MAIN PAGES

### landingpage

| Element to test | Test procedure | Expected outcome | Pass/Fail |
| --- | --- | --- | --- |
| On Load | Navigate to home page through URL | Display correctly | pass |
| Ranking list link | Click the link | Redirect to ranking list page | pass |
| Log in link | Click the link | Redirect to login page | pass |

### rankinglist

| Element to test | Test procedure | Expected outcome | Pass/Fail |
| --- | --- | --- | --- |
| On Load | Navigate to page via navbar | Display correctly with published swordfighters name, current ranking place, which series they appear on and an upvote button. | pass |
| Fighter card image link | Click the link | Redirect to fighters individual page | pass |
| fighter card name link | Click the link | Redirect to fighters individual page | pass |
| Fighter card upvote button | Click the link | Redirect to login page | pass |

### swordfighter page

| Element to test | Test procedure | Expected outcome | Pass/Fail |
| --- | --- | --- | --- |
| On Load | Navigate to page via ranking list card | Display correctly with published swordfighter name, which series they appear on, a description of the character, the number of upvotes for the character, an upvote button comment form with a sign in btn instead of sign up. | pass |
| Fighter upvote button | Click the button | Redirect to login page | pass |
| Comment form | Write a comment and push associated button "Log in to comment" | Redirect to login page | pass |
| Comments section | Read comment section | No buttons for flag or delete should be visible | pass |

### contribute page

| Element to test | Test procedure | Expected outcome | Pass/Fail |
| --- | --- | --- | --- |
| On Load | Navigate to page via navbar | Should render the suggestion form with a button styled link that says Sign in instead of submit button. | pass |
| Sign in button | Click the button | Should redirect to sign in page. | pass |

## ACTION PAGES

### RU sure delete page

| Element to test | Test procedure | Expected outcome | Pass/Fail |
| --- | --- | --- | --- |
| On Load | Navigate to page through URL confirmed by a logged in user. | Should throw a 403 error. | fail |

### Edit swordfighter page

| Element to test | Test procedure | Expected outcome | Pass/Fail |
| --- | --- | --- | --- |
| On Load | Navigate to page through URL confirmed by a logged in user. | Should throw a 403 error. | fail |

## FUNCTIONAL

### base.html

| Element to test | Test procedure | Expected outcome | Pass/Fail |
| --- | --- | --- | --- |
| On Load | Navigate to home page through URL | Should throw a 403 error. | pass |
| Navbar logo link | Click the link | Should redirect to landing page. | pass |
| Contribute link | Click the link | Should redirect to contribute page
