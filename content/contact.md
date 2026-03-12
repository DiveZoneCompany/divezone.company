---
type: page

layout: page
title: Contact
menus:
  main:
    identifier: 'Contact'
    name: 'Contact'
    weight: 99
  footer:
    identifier: 'Contact'
    name: 'Contact'
    weight: 99
---

Feel free to contact us for more information.

### Contact form

<form name='contact' method='POST' data-netlify='true' data-netlify-recaptcha='true' netlify-honeypot='fub'>
  <label for='name'>Your Name:</label>
  <input type='text' name='name' placeholder='Your name'>
  <label for='email'>Your Email:</label>
  <input type='email' name='email' placeholder='Your email address'>
  <label for='message'>Message:</label>
  <textarea name='message' rows='5' placeholder='Your question/remark'></textarea>
  <div hidden></div>
  <div hidden>
    <label> Don’t fill this out if you’re human: <input name='fub'> </label>
  </div>
  <div></div>
  <div data-netlify-recaptcha='true'></div>
  <div></div>
  <button type='submit'>Submit message</button>
</form>

### Postal address

The DiveZone Company

Damastroos 2<br>
2317GA Leiden<br>
The Netherlands
