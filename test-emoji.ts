import { Hono } from 'hono'

const app = new Hono()

app.get('/test', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Emoji Test</title>
    </head>
    <body>
        <h1>HTML Emoji Test</h1>
        <p>Emoji in HTML: 🟢 ✅ 🎯</p>
        
        <script>
            // Test 1: Emoji in JS string literal
            const emoji1 = '🟢';
            console.log('Emoji literal:', emoji1);
            
            // Test 2: HTML entity
            document.body.innerHTML += '<p>HTML Entity: &#x1F7E2;</p>';
            
            // Test 3: innerHTML with emoji
            const div = document.createElement('div');
            div.innerHTML = '<p>From JS: 🟢 Test</p>';
            document.body.appendChild(div);
            
            alert('If you see this, JavaScript loaded successfully!');
        </script>
    </body>
    </html>
  `)
})

export default app
