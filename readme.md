# Overview

This is a portfolio website with its own expense tracker.

## Details

### General Layout

#### Header Navigation

On this part, the logo and navigation will lead to other pages.

- HOME will lead to the home page
- ABOUT US will lead to the about us page
- COURSES will lead to the courses page
- PORTFOLIO will lead to the portfolio page
- CONTACT will lead to the contact page
- TRACKER will lead to the tracker page

The selected page will have its link **activated**. For example, if you are on the HOME page, the HOME in the navigation link will be active (color blue).

At the bottom of the page, there will be stick "go to top" button, which if clicked will scroll to the top of the page.

#### Footer Navigation

The quick links, latest posts, and recent news all will be links, but it will only redirect to #

### Home Page

The page has two carousels.

- The main carousel will display images with caption, one of them has "see pricing" button.

  - When you click this button, you need to display the **pricing modal**.
  - Clicking outside the modal will close the modal.
  - Clicking the "Get Now" button will **do nothing**.

- This page also have the testimony carousel, when we click the controls, our carousel will turn to the selected testimony.

### About Us

This page shows information about us.

- Below "Our Solution" section, we have 4 **accordions**. If you click the accordion, it will show more details. The details may be filled using lorem text.

### Courses

This page shows the courses we offer, please follow the design

### Contact Us

This page shows a google map iframe, form input and contact info.

Form requirements:

- The form which have asterisk sign (\*) are **required**
- Email should have **email format**
- Submitting the form destination will be '#'

In the **Contact info** section, if you click the email address, it will redirect to your email client.

### Portfolio (optional)

In this page, displayed several portfolio images. There are 4 buttons "All", "Web Design", "Mobile App", "UI Design"

- If you click "All", all of the images will **show up**
- If you click "Web Design", it will only show images which **belongs** to the web design category
- It is up to you which portfolio belongs to which category, at least each categories must have 2 images (more is okay)

### Expense Tracker

In this page, displayed an expense tracker.

There is only **one** link, "Home" which will redirect to **HOME page**

- The starting balance will be 0, it is the total of the income and expense
- The income will show the total income transactions
- The expense will show the total expense transactions
- History will display all of the transactions, ordered from the oldest transaction
- Transaction history can be deleted, if the data is deleted then the balance, total income and expense will also be recalculated

New Transaction

- Transaction Details is must not be empty
- Amount can be negative or positive
- Entering zero as amount will show up as income in history
- Negative amount will add the total expense, but it will decrease the balance
- Positive amount will add the total income and the balance
