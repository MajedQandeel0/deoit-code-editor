const LESSONS = {
  html: {
    title: 'HTML',
    icon: '#e44d26',
    lessons: [
      {
        id: 1,
        title: 'Introduction to HTML',
        desc: 'What is HTML and how the web works.',
        content: `
<h2>What is HTML?</h2>
<p>HTML (HyperText Markup Language) is the standard language for creating web pages. It describes the structure of a web page using a system of tags and attributes.</p>

<h3>How the Web Works</h3>
<p>When you visit a website, your browser sends a request to a server. The server responds with HTML code, which the browser interprets and displays as a visual page.</p>

<div class="lesson-diagram">
  <div class="diagram-step">
    <div class="step-num">1</div>
    <div><strong>You type a URL</strong><br><span class="step-desc">Browser sends request to server</span></div>
  </div>
  <div class="diagram-arrow">&rarr;</div>
  <div class="diagram-step">
    <div class="step-num">2</div>
    <div><strong>Server responds</strong><br><span class="step-desc">Returns HTML, CSS, JS files</span></div>
  </div>
  <div class="diagram-arrow">&rarr;</div>
  <div class="diagram-step">
    <div class="step-num">3</div>
    <div><strong>Browser renders</strong><br><span class="step-desc">Parses HTML and displays the page</span></div>
  </div>
</div>

<h3>Your First HTML Document</h3>
<p>Every HTML document follows a basic structure:</p>

<pre class="lesson-code" data-try="html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;My Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Hello, World!&lt;/h1&gt;
  &lt;p&gt;This is my first web page.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<ul>
  <li><strong>&lt;!DOCTYPE html&gt;</strong>  -  Declares the document type and HTML version</li>
  <li><strong>&lt;html&gt;</strong>  -  The root element of the page</li>
  <li><strong>&lt;head&gt;</strong>  -  Contains meta information about the page</li>
  <li><strong>&lt;title&gt;</strong>  -  Sets the page title shown in the browser tab</li>
  <li><strong>&lt;body&gt;</strong>  -  Contains the visible content of the page</li>
</ul>

<h3>Common HTML Tags</h3>
<table>
  <tr><th>Tag</th><th>Description</th><th>Example</th></tr>
  <tr><td>&lt;h1&gt;-&lt;h6&gt;</td><td>Headings (h1 is largest)</td><td>&lt;h1&gt;Title&lt;/h1&gt;</td></tr>
  <tr><td>&lt;p&gt;</td><td>Paragraph of text</td><td>&lt;p&gt;Text here&lt;/p&gt;</td></tr>
  <tr><td>&lt;a&gt;</td><td>Hyperlink to another page</td><td>&lt;a href="url"&gt;Link&lt;/a&gt;</td></tr>
  <tr><td>&lt;img&gt;</td><td>Displays an image</td><td>&lt;img src="pic.jpg"&gt;</td></tr>
  <tr><td>&lt;ul&gt;/&lt;ol&gt;</td><td>Unordered/Ordered list</td><td>&lt;ul&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/ul&gt;</td></tr>
  <tr><td>&lt;div&gt;</td><td>Block-level container</td><td>&lt;div&gt;Content&lt;/div&gt;</td></tr>
</table>

<h3>HTML Tags</h3>
<p>HTML tags are keywords surrounded by angle brackets: <code>&lt;tagname&gt;</code>. Most tags come in pairs  -  an opening tag and a closing tag with a forward slash.</p>

<div class="lesson-code">
<span class="hl-tag">&lt;tagname&gt;</span>content goes here<span class="hl-tag">&lt;/tagname&gt;</span>
</div>

<div class="note note-info"><strong>Tip:</strong> Click the <strong>Run</strong> button above to see the HTML code in action right here!</div>

<div class="note note-warning"><strong>Note:</strong> HTML is not a programming language  -  it is a <strong>markup language</strong> that structures content. You'll add styling with CSS and interactivity with JavaScript later.</div>

<h3>Try It Yourself</h3>
<p>Open the <a href="pages/editor" class="lesson-link">Deoit Editor</a> and paste the HTML above. Click <strong>Run</strong> to see your first web page in action!</p>
        `
      },
      {
        id: 2,
        title: 'Headings & Paragraphs',
        desc: 'Structuring text content on a page.',
        content: `
<h2>Headings & Paragraphs</h2>
<p>HTML provides six levels of headings and the paragraph tag for organizing text content.</p>

<h3>Heading Levels</h3>
<p>Use <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code> to define headings. <code>&lt;h1&gt;</code> is the most important, <code>&lt;h6&gt;</code> the least.</p>

<div class="lesson-code">
<span class="hl-tag">&lt;h1&gt;</span>Main Title<span class="hl-tag">&lt;/h1&gt;</span>
<span class="hl-tag">&lt;h2&gt;</span>Section Title<span class="hl-tag">&lt;/h2&gt;</span>
<span class="hl-tag">&lt;h3&gt;</span>Subsection Title<span class="hl-tag">&lt;/h3&gt;</span>
<span class="hl-tag">&lt;h4&gt;</span>Minor Title<span class="hl-tag">&lt;/h4&gt;</span>
<span class="hl-tag">&lt;h5&gt;</span>Small Title<span class="hl-tag">&lt;/h5&gt;</span>
<span class="hl-tag">&lt;h6&gt;</span>Tiny Title<span class="hl-tag">&lt;/h6&gt;</span>
</div>

<h3>Paragraphs</h3>
<p>The <code>&lt;p&gt;</code> tag defines a paragraph. Browsers automatically add space before and after each paragraph.</p>

<div class="lesson-code">
<span class="hl-tag">&lt;p&gt;</span>This is a paragraph of text. It can contain multiple sentences and words. Browsers will wrap the text automatically.<span class="hl-tag">&lt;/p&gt;</span>
<span class="hl-tag">&lt;p&gt;</span>This is another paragraph. Notice the space between paragraphs.<span class="hl-tag">&lt;/p&gt;</span>
</div>

<h3>Line Breaks</h3>
<p>Use <code>&lt;br&gt;</code> to insert a line break within a paragraph. It is a self-closing tag (no closing tag needed).</p>

<div class="lesson-code">
<span class="hl-tag">&lt;p&gt;</span>First line<span class="hl-tag">&lt;br&gt;</span>Second line<span class="hl-tag">&lt;/p&gt;</span>
</div>

<h3>Horizontal Rules</h3>
<p>The <code>&lt;hr&gt;</code> tag creates a thematic break or horizontal line, often used to separate content sections.</p>

<div class="lesson-code">
<span class="hl-tag">&lt;h2&gt;</span>Section One<span class="hl-tag">&lt;/h2&gt;</span>
<span class="hl-tag">&lt;p&gt;</span>Content here.<span class="hl-tag">&lt;/p&gt;</span>
<span class="hl-tag">&lt;hr&gt;</span>
<span class="hl-tag">&lt;h2&gt;</span>Section Two<span class="hl-tag">&lt;/h2&gt;</span>
<span class="hl-tag">&lt;p&gt;</span>More content.<span class="hl-tag">&lt;/p&gt;</span>
</div>

<h3>Best Practices</h3>
<ul>
  <li>Use only one <code>&lt;h1&gt;</code> per page (the main title)</li>
  <li>Follow heading hierarchy: h1 → h2 → h3, don't skip levels</li>
  <li>Keep paragraphs focused on a single topic</li>
  <li>Use <code>&lt;br&gt;</code> sparingly  -  use CSS for spacing when possible</li>
</ul>

<div class="lesson-tip">
  <strong>Tip:</strong> Search engines use headings to understand the structure of your content. A well-structured heading hierarchy improves SEO!
</div>
        `
      },
      {
        id: 3,
        title: 'Links & Images',
        desc: 'Adding hyperlinks and images to your pages.',
        content: `
<h2>Links & Images</h2>
<p>Links and images are what make the web interconnected and visual. Let's explore how to use them.</p>

<h3>Anchor Links (&lt;a&gt;)</h3>
<p>The <code>&lt;a&gt;</code> tag creates hyperlinks. The <code>href</code> attribute specifies the destination URL.</p>

<div class="lesson-code">
<span class="hl-comment">&lt;!-- External link --&gt;</span>
<span class="hl-tag">&lt;a</span> <span class="hl-attr">href</span>=<span class="hl-string">"https://example.com"</span><span class="hl-tag">&gt;</span>Visit Example<span class="hl-tag">&lt;/a&gt;</span>

<span class="hl-comment">&lt;!-- Internal link --&gt;</span>
<span class="hl-tag">&lt;a</span> <span class="hl-attr">href</span>=<span class="hl-string">"/about.html"</span><span class="hl-tag">&gt;</span>About Us<span class="hl-tag">&lt;/a&gt;</span>
</div>

<h3>Link Attributes</h3>
<ul>
  <li><strong>target="_blank"</strong>  -  Opens the link in a new tab</li>
  <li><strong>rel="noopener"</strong>  -  Security measure when using target="_blank"</li>
  <li><strong>title</strong>  -  Tooltip text shown on hover</li>
</ul>

<div class="lesson-code">
<span class="hl-tag">&lt;a</span> <span class="hl-attr">href</span>=<span class="hl-string">"https://example.com"</span>
   <span class="hl-attr">target</span>=<span class="hl-string">"_blank"</span>
   <span class="hl-attr">rel</span>=<span class="hl-string">"noopener"</span>
   <span class="hl-attr">title</span>=<span class="hl-string">"Go to Example"</span><span class="hl-tag">&gt;</span>
  Open in New Tab
<span class="hl-tag">&lt;/a&gt;</span>
</div>

<h3>Images (&lt;img&gt;)</h3>
<p>The <code>&lt;img&gt;</code> tag embeds images. It is a self-closing tag. The <code>src</code> attribute specifies the image path, and <code>alt</code> provides alternative text.</p>

<div class="lesson-code">
<span class="hl-tag">&lt;img</span> <span class="hl-attr">src</span>=<span class="hl-string">"photo.jpg"</span>
     <span class="hl-attr">alt</span>=<span class="hl-string">"A description of the image"</span>
     <span class="hl-attr">width</span>=<span class="hl-string">"400"</span><span class="hl-tag">&gt;</span>
</div>

<h3>Image Best Practices</h3>
<ul>
  <li><strong>Always</strong> include the <code>alt</code> attribute for accessibility</li>
  <li>Use descriptive alt text (e.g., "A red apple on a wooden table")</li>
  <li>Optimize images for web (JPEG for photos, PNG for graphics, WebP for modern)</li>
  <li>Specify width and height to prevent layout shifts</li>
</ul>

<div class="lesson-tip">
  <strong>Tip:</strong> Use relative paths for your own images (e.g., <code>images/photo.jpg</code>) and absolute URLs for external images hosted elsewhere.
</div>
        `
      },
      {
        id: 4,
        title: 'Lists & Tables',
        desc: 'Organizing data with lists and tables.',
        content: `
<h2>Lists & Tables</h2>
<p>Lists and tables help organize information in readable, structured formats.</p>

<h3>Unordered Lists</h3>
<p>Use <code>&lt;ul&gt;</code> for bullet-point lists. Each item uses <code>&lt;li&gt;</code>.</p>

<div class="lesson-code">
<span class="hl-tag">&lt;ul&gt;</span>
  <span class="hl-tag">&lt;li&gt;</span>Apples<span class="hl-tag">&lt;/li&gt;</span>
  <span class="hl-tag">&lt;li&gt;</span>Bananas<span class="hl-tag">&lt;/li&gt;</span>
  <span class="hl-tag">&lt;li&gt;</span>Oranges<span class="hl-tag">&lt;/li&gt;</span>
<span class="hl-tag">&lt;/ul&gt;</span>
</div>

<h3>Ordered Lists</h3>
<p>Use <code>&lt;ol&gt;</code> for numbered lists.</p>

<div class="lesson-code">
<span class="hl-tag">&lt;ol&gt;</span>
  <span class="hl-tag">&lt;li&gt;</span>First step<span class="hl-tag">&lt;/li&gt;</span>
  <span class="hl-tag">&lt;li&gt;</span>Second step<span class="hl-tag">&lt;/li&gt;</span>
  <span class="hl-tag">&lt;li&gt;</span>Third step<span class="hl-tag">&lt;/li&gt;</span>
<span class="hl-tag">&lt;/ol&gt;</span>
</div>

<h3>Nested Lists</h3>
<p>Lists can be nested inside other list items to create sub-lists.</p>

<div class="lesson-code">
<span class="hl-tag">&lt;ul&gt;</span>
  <span class="hl-tag">&lt;li&gt;</span>Fruits
    <span class="hl-tag">&lt;ul&gt;</span>
      <span class="hl-tag">&lt;li&gt;</span>Apples<span class="hl-tag">&lt;/li&gt;</span>
      <span class="hl-tag">&lt;li&gt;</span>Bananas<span class="hl-tag">&lt;/li&gt;</span>
    <span class="hl-tag">&lt;/ul&gt;</span>
  <span class="hl-tag">&lt;/li&gt;</span>
  <span class="hl-tag">&lt;li&gt;</span>Vegetables
    <span class="hl-tag">&lt;ul&gt;</span>
      <span class="hl-tag">&lt;li&gt;</span>Carrots<span class="hl-tag">&lt;/li&gt;</span>
    <span class="hl-tag">&lt;/ul&gt;</span>
  <span class="hl-tag">&lt;/li&gt;</span>
<span class="hl-tag">&lt;/ul&gt;</span>
</div>

<h3>Tables</h3>
<p>Tables use <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> (row), <code>&lt;th&gt;</code> (header cell), and <code>&lt;td&gt;</code> (data cell).</p>

<div class="lesson-code">
<span class="hl-tag">&lt;table&gt;</span>
  <span class="hl-tag">&lt;tr&gt;</span>
    <span class="hl-tag">&lt;th&gt;</span>Name<span class="hl-tag">&lt;/th&gt;</span>
    <span class="hl-tag">&lt;th&gt;</span>Age<span class="hl-tag">&lt;/th&gt;</span>
    <span class="hl-tag">&lt;th&gt;</span>City<span class="hl-tag">&lt;/th&gt;</span>
  <span class="hl-tag">&lt;/tr&gt;</span>
  <span class="hl-tag">&lt;tr&gt;</span>
    <span class="hl-tag">&lt;td&gt;</span>Alice<span class="hl-tag">&lt;/td&gt;</span>
    <span class="hl-tag">&lt;td&gt;</span>25<span class="hl-tag">&lt;/td&gt;</span>
    <span class="hl-tag">&lt;td&gt;</span>New York<span class="hl-tag">&lt;/td&gt;</span>
  <span class="hl-tag">&lt;/tr&gt;</span>
  <span class="hl-tag">&lt;tr&gt;</span>
    <span class="hl-tag">&lt;td&gt;</span>Bob<span class="hl-tag">&lt;/td&gt;</span>
    <span class="hl-tag">&lt;td&gt;</span>30<span class="hl-tag">&lt;/td&gt;</span>
    <span class="hl-tag">&lt;td&gt;</span>London<span class="hl-tag">&lt;/td&gt;</span>
  <span class="hl-tag">&lt;/tr&gt;</span>
<span class="hl-tag">&lt;/table&gt;</span>
</div>

<h3>Table Structure</h3>
<p>For more complex tables, use <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, and <code>&lt;tfoot&gt;</code> to group rows logically.</p>

<div class="lesson-code">
<span class="hl-tag">&lt;table&gt;</span>
  <span class="hl-tag">&lt;thead&gt;</span>
    <span class="hl-tag">&lt;tr&gt;</span>
      <span class="hl-tag">&lt;th&gt;</span>Product<span class="hl-tag">&lt;/th&gt;</span>
      <span class="hl-tag">&lt;th&gt;</span>Price<span class="hl-tag">&lt;/th&gt;</span>
    <span class="hl-tag">&lt;/tr&gt;</span>
  <span class="hl-tag">&lt;/thead&gt;</span>
  <span class="hl-tag">&lt;tbody&gt;</span>
    <span class="hl-tag">&lt;tr&gt;</span>
      <span class="hl-tag">&lt;td&gt;</span>Widget<span class="hl-tag">&lt;/td&gt;</span>
      <span class="hl-tag">&lt;td&gt;</span>$10<span class="hl-tag">&lt;/td&gt;</span>
    <span class="hl-tag">&lt;/tr&gt;</span>
  <span class="hl-tag">&lt;/tbody&gt;</span>
<span class="hl-tag">&lt;/table&gt;</span>
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Use CSS to style your tables  -  borders, spacing, alternating row colors  -  for better readability.
</div>
        `
      },
      {
        id: 5,
        title: 'Forms & Inputs',
        desc: 'Building interactive forms for user input.',
        content: `
<h2>Forms & Inputs</h2>
<p>Forms are how users interact with web pages  -  signing up, searching, submitting data, and more.</p>

<h3>The &lt;form&gt; Element</h3>
<p>The <code>&lt;form&gt;</code> tag wraps all input elements. It has two key attributes: <code>action</code> (where to send data) and <code>method</code> (how to send it).</p>

<div class="lesson-code">
<span class="hl-tag">&lt;form</span> <span class="hl-attr">action</span>=<span class="hl-string">"/submit"</span> <span class="hl-attr">method</span>=<span class="hl-string">"post"</span><span class="hl-tag">&gt;</span>
  <span class="hl-comment">&lt;!-- form elements go here --&gt;</span>
<span class="hl-tag">&lt;/form&gt;</span>
</div>

<h3>Common Input Types</h3>
<div class="lesson-code">
<span class="hl-comment">&lt;!-- Text input --&gt;</span>
<span class="hl-tag">&lt;input</span> <span class="hl-attr">type</span>=<span class="hl-string">"text"</span> <span class="hl-attr">name</span>=<span class="hl-string">"username"</span> <span class="hl-attr">placeholder</span>=<span class="hl-string">"Enter your name"</span><span class="hl-tag">&gt;</span>

<span class="hl-comment">&lt;!-- Email input --&gt;</span>
<span class="hl-tag">&lt;input</span> <span class="hl-attr">type</span>=<span class="hl-string">"email"</span> <span class="hl-attr">name</span>=<span class="hl-string">"email"</span> <span class="hl-attr">placeholder</span>=<span class="hl-string">"email@example.com"</span><span class="hl-tag">&gt;</span>

<span class="hl-comment">&lt;!-- Password input --&gt;</span>
<span class="hl-tag">&lt;input</span> <span class="hl-attr">type</span>=<span class="hl-string">"password"</span> <span class="hl-attr">name</span>=<span class="hl-string">"password"</span><span class="hl-tag">&gt;</span>

<span class="hl-comment">&lt;!-- Number input --&gt;</span>
<span class="hl-tag">&lt;input</span> <span class="hl-attr">type</span>=<span class="hl-string">"number"</span> <span class="hl-attr">name</span>=<span class="hl-string">"age"</span> <span class="hl-attr">min</span>=<span class="hl-string">"1"</span> <span class="hl-attr">max</span>=<span class="hl-string">"120"</span><span class="hl-tag">&gt;</span>

<span class="hl-comment">&lt;!-- Checkbox --&gt;</span>
<span class="hl-tag">&lt;input</span> <span class="hl-attr">type</span>=<span class="hl-string">"checkbox"</span> <span class="hl-attr">name</span>=<span class="hl-string">"agree"</span> <span class="hl-attr">id</span>=<span class="hl-string">"agree"</span><span class="hl-tag">&gt;</span>
<span class="hl-tag">&lt;label</span> <span class="hl-attr">for</span>=<span class="hl-string">"agree"</span><span class="hl-tag">&gt;</span>I agree to the terms<span class="hl-tag">&lt;/label&gt;</span>
</div>

<h3>Textarea & Select</h3>
<div class="lesson-code">
<span class="hl-comment">&lt;!-- Textarea (multi-line text) --&gt;</span>
<span class="hl-tag">&lt;textarea</span> <span class="hl-attr">name</span>=<span class="hl-string">"message"</span> <span class="hl-attr">rows</span>=<span class="hl-string">"4"</span> <span class="hl-attr">cols</span>=<span class="hl-string">"30"</span><span class="hl-tag">&gt;&lt;/textarea&gt;</span>

<span class="hl-comment">&lt;!-- Select dropdown --&gt;</span>
<span class="hl-tag">&lt;select</span> <span class="hl-attr">name</span>=<span class="hl-string">"country"</span><span class="hl-tag">&gt;</span>
  <span class="hl-tag">&lt;option</span> <span class="hl-attr">value</span>=<span class="hl-string">""</span><span class="hl-tag">&gt;</span>Select a country<span class="hl-tag">&lt;/option&gt;</span>
  <span class="hl-tag">&lt;option</span> <span class="hl-attr">value</span>=<span class="hl-string">"us"</span><span class="hl-tag">&gt;</span>United States<span class="hl-tag">&lt;/option&gt;</span>
  <span class="hl-tag">&lt;option</span> <span class="hl-attr">value</span>=<span class="hl-string">"uk"</span><span class="hl-tag">&gt;</span>United Kingdom<span class="hl-tag">&lt;/option&gt;</span>
<span class="hl-tag">&lt;/select&gt;</span>
</div>

<h3>Buttons</h3>
<div class="lesson-code">
<span class="hl-comment">&lt;!-- Submit button --&gt;</span>
<span class="hl-tag">&lt;button</span> <span class="hl-attr">type</span>=<span class="hl-string">"submit"</span><span class="hl-tag">&gt;</span>Send<span class="hl-tag">&lt;/button&gt;</span>

<span class="hl-comment">&lt;!-- Reset button --&gt;</span>
<span class="hl-tag">&lt;button</span> <span class="hl-attr">type</span>=<span class="hl-string">"reset"</span><span class="hl-tag">&gt;</span>Clear<span class="hl-tag">&lt;/button&gt;</span>
</div>

<h3>Labels & Accessibility</h3>
<p>Always use <code>&lt;label&gt;</code> elements with your inputs. Labels improve accessibility and usability  -  clicking a label focuses the associated input.</p>

<div class="lesson-tip">
  <strong>Tip:</strong> The <code>for</code> attribute on a label should match the <code>id</code> of the input it belongs to. This connects them properly.
</div>
        `
      },
      {
        id: 6,
        title: 'Semantic HTML',
        desc: 'Using meaningful tags for better structure and SEO.',
        content: `
<h2>Semantic HTML</h2>
<p>Semantic HTML means using tags that describe their meaning and purpose, not just their appearance.</p>

<h3>Why Semantic HTML?</h3>
<ul>
  <li><strong>Accessibility:</strong> Screen readers use semantic tags to navigate</li>
  <li><strong>SEO:</strong> Search engines understand your content better</li>
  <li><strong>Maintainability:</strong> Code is easier to read and understand</li>
</ul>

<h3>Semantic Layout Elements</h3>
<div class="lesson-code">
<span class="hl-tag">&lt;header&gt;</span>  <span class="hl-comment">&lt;!-- Page or section header --&gt;</span>
<span class="hl-tag">&lt;nav&gt;</span>      <span class="hl-comment">&lt;!-- Navigation menu --&gt;</span>
<span class="hl-tag">&lt;main&gt;</span>      <span class="hl-comment">&lt;!-- Main content (use once per page) --&gt;</span>
<span class="hl-tag">&lt;section&gt;</span>   <span class="hl-comment">&lt;!-- Thematic group of content --&gt;</span>
<span class="hl-tag">&lt;article&gt;</span>   <span class="hl-comment">&lt;!-- Self-contained content (blog post, news) --&gt;</span>
<span class="hl-tag">&lt;aside&gt;</span>     <span class="hl-comment">&lt;!-- Sidebar or tangential content --&gt;</span>
<span class="hl-tag">&lt;footer&gt;</span>    <span class="hl-comment">&lt;!-- Page or section footer --&gt;</span>
</div>

<h3>Semantic HTML Page Structure</h3>
<div class="lesson-code">
<span class="hl-tag">&lt;body&gt;</span>
  <span class="hl-tag">&lt;header&gt;</span>
    <span class="hl-tag">&lt;h1&gt;</span>My Website<span class="hl-tag">&lt;/h1&gt;</span>
    <span class="hl-tag">&lt;nav&gt;</span>
      <span class="hl-tag">&lt;ul&gt;</span>
        <span class="hl-tag">&lt;li&gt;</span><span class="hl-tag">&lt;a</span> <span class="hl-attr">href</span>=<span class="hl-string">"/"</span><span class="hl-tag">&gt;</span>Home<span class="hl-tag">&lt;/a&gt;&lt;/li&gt;</span>
        <span class="hl-tag">&lt;li&gt;</span><span class="hl-tag">&lt;a</span> <span class="hl-attr">href</span>=<span class="hl-string">"/blog"</span><span class="hl-tag">&gt;</span>Blog<span class="hl-tag">&lt;/a&gt;&lt;/li&gt;</span>
      <span class="hl-tag">&lt;/ul&gt;</span>
    <span class="hl-tag">&lt;/nav&gt;</span>
  <span class="hl-tag">&lt;/header&gt;</span>

  <span class="hl-tag">&lt;main&gt;</span>
    <span class="hl-tag">&lt;article&gt;</span>
      <span class="hl-tag">&lt;h2&gt;</span>Blog Post Title<span class="hl-tag">&lt;/h2&gt;</span>
      <span class="hl-tag">&lt;p&gt;</span>Article content here...<span class="hl-tag">&lt;/p&gt;</span>
    <span class="hl-tag">&lt;/article&gt;</span>

    <span class="hl-tag">&lt;aside&gt;</span>
      <span class="hl-tag">&lt;h3&gt;</span>Related Posts<span class="hl-tag">&lt;/h3&gt;</span>
      <span class="hl-tag">&lt;ul&gt;</span>
        <span class="hl-tag">&lt;li&gt;</span>Post 1<span class="hl-tag">&lt;/li&gt;</span>
        <span class="hl-tag">&lt;li&gt;</span>Post 2<span class="hl-tag">&lt;/li&gt;</span>
      <span class="hl-tag">&lt;/ul&gt;</span>
    <span class="hl-tag">&lt;/aside&gt;</span>
  <span class="hl-tag">&lt;/main&gt;</span>

  <span class="hl-tag">&lt;footer&gt;</span>
    <span class="hl-tag">&lt;p&gt;</span>&amp;copy; 2026 My Website<span class="hl-tag">&lt;/p&gt;</span>
  <span class="hl-tag">&lt;/footer&gt;</span>
<span class="hl-tag">&lt;/body&gt;</span>
</div>

<h3>Non-Semantic vs Semantic</h3>
<div class="lesson-code">
<span class="hl-comment">&lt;!-- Bad: non-semantic divs --&gt;</span>
<span class="hl-tag">&lt;div</span> <span class="hl-attr">class</span>=<span class="hl-string">"header"</span><span class="hl-tag">&gt;</span>...<span class="hl-tag">&lt;/div&gt;</span>
<span class="hl-tag">&lt;div</span> <span class="hl-attr">class</span>=<span class="hl-string">"nav"</span><span class="hl-tag">&gt;</span>...<span class="hl-tag">&lt;/div&gt;</span>

<span class="hl-comment">&lt;!-- Good: semantic tags --&gt;</span>
<span class="hl-tag">&lt;header&gt;</span>...<span class="hl-tag">&lt;/header&gt;</span>
<span class="hl-tag">&lt;nav&gt;</span>...<span class="hl-tag">&lt;/nav&gt;</span>
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Use semantic HTML by default. Only use <code>&lt;div&gt;</code> when no semantic element fits, typically for styling wrappers.
</div>
        `
      },
      {
        id: 7,
        title: 'HTML Best Practices',
        desc: 'Writing clean, maintainable, and accessible HTML.',
        content: `
<h2>HTML Best Practices</h2>
<p>Writing clean HTML is about more than just making it work. These practices will help you write code that's maintainable, accessible, and performant.</p>

<h3>1. Use Proper Doctype</h3>
<p>Always start with <code>&lt;!DOCTYPE html&gt;</code> to trigger standards mode in browsers.</p>

<h3>2. Specify Character Encoding</h3>
<p>Add <code>&lt;meta charset="UTF-8"&gt;</code> in the <code>&lt;head&gt;</code> to support all characters properly.</p>

<h3>3. Use Lowercase Tags and Attributes</h3>
<p>HTML is case-insensitive, but lowercase is the convention and improves readability.</p>

<div class="lesson-code">
<span class="hl-comment">&lt;!-- Avoid --&gt;</span>
<span class="hl-tag">&lt;DIV</span> <span class="hl-attr">CLASS</span>=<span class="hl-string">"box"</span><span class="hl-tag">&gt;</span>

<span class="hl-comment">&lt;!-- Better --&gt;</span>
<span class="hl-tag">&lt;div</span> <span class="hl-attr">class</span>=<span class="hl-string">"box"</span><span class="hl-tag">&gt;</span>
</div>

<h3>4. Always Close Tags</h3>
<p>Close all tags properly, even optional ones like <code>&lt;li&gt;</code>, <code>&lt;p&gt;</code>, and <code>&lt;td&gt;</code>.</p>

<h3>5. Use Meaningful Attribute Values</h3>
<p>Class and ID names should describe purpose, not appearance.</p>

<div class="lesson-code">
<span class="hl-comment">&lt;!-- Avoid --&gt;</span>
<span class="hl-tag">&lt;div</span> <span class="hl-attr">class</span>=<span class="hl-string">"red-bold-text"</span><span class="hl-tag">&gt;</span>

<span class="hl-comment">&lt;!-- Better --&gt;</span>
<span class="hl-tag">&lt;div</span> <span class="hl-attr">class</span>=<span class="hl-string">"error-message"</span><span class="hl-tag">&gt;</span>
</div>

<h3>6. Optimize Images</h3>
<ul>
  <li>Use appropriate formats (JPEG for photos, PNG for graphics, SVG for icons)</li>
  <li>Always include <code>alt</code> text</li>
  <li>Specify dimensions to avoid layout shifts</li>
</ul>

<h3>7. Accessibility First</h3>
<ul>
  <li>Use semantic elements</li>
  <li>Label all form inputs</li>
  <li>Ensure sufficient color contrast</li>
  <li>Use ARIA attributes when needed</li>
</ul>

<h3>8. Validate Your HTML</h3>
<p>Use the <a href="https://validator.w3.org/" target="_blank" rel="noopener" class="lesson-link">W3C Validator</a> to check your HTML for errors and compliance with web standards.</p>

<div class="lesson-tip">
  <strong>Remember:</strong> HTML is the foundation of the web. Solid HTML leads to better accessibility, SEO, and maintainability.
</div>
        `
      },
      {
        id: 8,
        title: 'Doctype & Character Encoding',
        desc: 'Understanding DOCTYPE declarations and character encoding.',
        content: `
<h2>Doctype &amp; Character Encoding</h2>
<p>Every HTML document needs a proper declaration and character encoding to render correctly across all browsers and devices.</p>

<h3>The DOCTYPE Declaration</h3>
<p>The <code>&lt;!DOCTYPE html&gt;</code> declaration tells the browser which version of HTML the page uses. In HTML5, it is simple and short.</p>

<div class="lesson-code">
<span class="hl-comment">&lt;!-- HTML5 (always use this) --&gt;</span>
<span class="hl-tag">&lt;!DOCTYPE html&gt;</span>

<span class="hl-comment">&lt;!-- Old HTML 4.01 (don't use) --&gt;</span>
<span class="hl-tag">&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"&gt;</span>
</div>

<p>Without a DOCTYPE, browsers enter <strong>quirks mode</strong>, which causes inconsistent rendering. Always include it as the very first line.</p>

<h3>Character Encoding</h3>
<p>The <code>&lt;meta charset&gt;</code> tag tells the browser which character set to use when displaying text. <strong>UTF-8</strong> is the universal standard.</p>

<div class="lesson-code">
<span class="hl-tag">&lt;head&gt;</span>
  <span class="hl-comment">&lt;!-- Always put this as the first tag inside &lt;head&gt; --&gt;</span>
  <span class="hl-tag">&lt;meta</span> <span class="hl-attr">charset</span>=<span class="hl-string">"UTF-8"</span><span class="hl-tag">&gt;</span>
  <span class="hl-tag">&lt;title&gt;</span>My Page<span class="hl-tag">&lt;/title&gt;</span>
<span class="hl-tag">&lt;/head&gt;</span>
</div>

<h3>Why UTF-8 Matters</h3>
<p>UTF-8 supports every character in virtually every language, plus symbols and emoji. Without it, special characters may display as garbage.</p>

<div class="lesson-code">
<span class="hl-comment">&lt;!-- Without UTF-8, these may break: --&gt;</span>
<span class="hl-tag">&lt;p&gt;</span>café, naïve, résumé<span class="hl-tag">&lt;/p&gt;</span>
<span class="hl-tag">&lt;p&gt;</span>© 2026 — All rights reserved<span class="hl-tag">&lt;/p&gt;</span>
<span class="hl-tag">&lt;p&gt;</span>Price: $100 &amp;euro; (€)<span class="hl-tag">&lt;/p&gt;</span>
</div>

<h3>Complete HTML5 Starter</h3>
<pre class="lesson-code" data-try="html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;My Web Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Hello, World!&lt;/h1&gt;
  &lt;p&gt;Special chars: café, ñ, ©, ★&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<h3>The lang Attribute</h3>
<p>The <code>lang</code> attribute on <code>&lt;html&gt;</code> tells browsers and screen readers which language the content is in, improving accessibility and search ranking.</p>

<div class="lesson-tip">
  <strong>Tip:</strong> Always place <code>&lt;meta charset="UTF-8"&gt;</code> as the very first element inside <code>&lt;head&gt;</code>  -  it must come before any other tags or the browser may guess incorrectly.
</div>
        `
      },
      {
        id: 9,
        title: 'HTML Attributes Deep Dive',
        desc: 'Mastering attributes that customize element behavior.',
        content: `
<h2>HTML Attributes Deep Dive</h2>
<p>Attributes provide additional information about HTML elements. They appear inside opening tags and control behavior, identity, styling, and accessibility.</p>

<h3>Common Global Attributes</h3>
<div class="lesson-code">
<span class="hl-tag">&lt;div</span>
  <span class="hl-attr">id</span>=<span class="hl-string">"main-content"</span>        <span class="hl-comment">&lt;!-- Unique identifier --&gt;</span>
  <span class="hl-attr">class</span>=<span class="hl-string">"container box"</span>      <span class="hl-comment">&lt;!-- CSS classes (space-separated) --&gt;</span>
  <span class="hl-attr">style</span>=<span class="hl-string">"color: red;"</span>         <span class="hl-comment">&lt;!-- Inline CSS --&gt;</span>
  <span class="hl-attr">title</span>=<span class="hl-string">"Tooltip text"</span>        <span class="hl-comment">&lt;!-- Tooltip on hover --&gt;</span>
<span class="hl-tag">&gt;</span>Content<span class="hl-tag">&lt;/div&gt;</span>
</div>

<h3>href &amp; src Attributes</h3>
<div class="lesson-code">
<span class="hl-comment">&lt;!-- href: destination URL for links --&gt;</span>
<span class="hl-tag">&lt;a</span> <span class="hl-attr">href</span>=<span class="hl-string">"https://example.com"</span><span class="hl-tag">&gt;</span>Visit<span class="hl-tag">&lt;/a&gt;</span>
<span class="hl-tag">&lt;a</span> <span class="hl-attr">href</span>=<span class="hl-string">"mailto:hi@example.com"</span><span class="hl-tag">&gt;</span>Email Us<span class="hl-tag">&lt;/a&gt;</span>

<span class="hl-comment">&lt;!-- src: source file for images, scripts, etc. --&gt;</span>
<span class="hl-tag">&lt;img</span> <span class="hl-attr">src</span>=<span class="hl-string">"photo.webp"</span> <span class="hl-attr">alt</span>=<span class="hl-string">"Description"</span><span class="hl-tag">&gt;</span>
<span class="hl-tag">&lt;script</span> <span class="hl-attr">src</span>=<span class="hl-string">"app.js"</span><span class="hl-tag">&gt;&lt;/script&gt;</span>
</div>

<h3>Boolean Attributes</h3>
<p>Some attributes work as simple on/off switches. Their mere presence means "true".</p>

<div class="lesson-code">
<span class="hl-tag">&lt;input</span> <span class="hl-attr">type</span>=<span class="hl-string">"text"</span> <span class="hl-attr">disabled</span><span class="hl-tag">&gt;</span>      <span class="hl-comment">&lt;!-- Disabled --&gt;</span>
<span class="hl-tag">&lt;input</span> <span class="hl-attr">type</span>=<span class="hl-string">"text"</span> <span class="hl-attr">required</span><span class="hl-tag">&gt;</span>       <span class="hl-comment">&lt;!-- Required field --&gt;</span>
<span class="hl-tag">&lt;input</span> <span class="hl-attr">type</span>=<span class="hl-string">"checkbox"</span> <span class="hl-attr">checked</span><span class="hl-tag">&gt;</span>    <span class="hl-comment">&lt;!-- Pre-checked --&gt;</span>
<span class="hl-tag">&lt;video</span> <span class="hl-attr">autoplay</span> <span class="hl-attr">muted</span><span class="hl-tag">&gt;&lt;/video&gt;</span>     <span class="hl-comment">&lt;!-- Both present --&gt;</span>
</div>

<h3>data-* Custom Attributes</h3>
<p>Store custom data on any element using the <code>data-</code> prefix. Accessible via JavaScript.</p>

<div class="lesson-code">
<span class="hl-tag">&lt;div</span> <span class="hl-attr">data-user-id</span>=<span class="hl-string">"42"</span> <span class="hl-attr">data-role</span>=<span class="hl-string">"admin"</span><span class="hl-tag">&gt;</span>User Panel<span class="hl-tag">&lt;/div&gt;</span>

<span class="hl-comment">&lt;!-- Access in JavaScript --&gt;</span>
<span class="hl-tag">&lt;script&gt;</span>
  <span class="hl-keyword">const</span> div = <span class="hl-builtin">document</span>.<span class="hl-function">querySelector</span>(<span class="hl-string">"[data-user-id]"</span>);
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(div.<span class="hl-prop">dataset</span>.<span class="hl-prop">userId</span>);  <span class="hl-comment">// "42"</span>
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(div.<span class="hl-prop">dataset</span>.<span class="hl-prop">role</span>);     <span class="hl-comment">// "admin"</span>
<span class="hl-tag">&lt;/script&gt;</span>
</div>

<h3>aria-* Accessibility Attributes</h3>
<div class="lesson-code">
<span class="hl-comment">&lt;!-- aria-label provides text for screen readers --&gt;</span>
<span class="hl-tag">&lt;button</span> <span class="hl-attr">aria-label</span>=<span class="hl-string">"Close menu"</span><span class="hl-tag">&gt;</span>&amp;times;<span class="hl-tag">&lt;/button&gt;</span>

<span class="hl-comment">&lt;!-- aria-hidden hides decorative elements --&gt;</span>
<span class="hl-tag">&lt;span</span> <span class="hl-attr">aria-hidden</span>=<span class="hl-string">"true"</span><span class="hl-tag">&gt;</span>★★★<span class="hl-tag">&lt;/span&gt;</span>

<span class="hl-comment">&lt;!-- aria-expanded shows expandable state --&gt;</span>
<span class="hl-tag">&lt;button</span> <span class="hl-attr">aria-expanded</span>=<span class="hl-string">"false"</span><span class="hl-tag">&gt;</span>Menu<span class="hl-tag">&lt;/button&gt;</span>
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Use <code>id</code> for unique elements (only once per page). Use <code>class</code> for reusable styles (can be used many times). Never use <code>id</code> for styling alone  -  reserve it for JavaScript and label associations.
</div>
        `
      },
      {
        id: 10,
        title: 'Div, Span & Grouping Elements',
        desc: 'Grouping content with generic and semantic containers.',
        content: `
<h2>Div, Span &amp; Grouping Elements</h2>
<p>Grouping elements let you organize content logically and apply styles or scripts to multiple elements at once.</p>

<h3>Div and Span</h3>
<p><code>&lt;div&gt;</code> is a <strong>block-level</strong> container and <code>&lt;span&gt;</code> is an <strong>inline</strong> container. They have no visual effect on their own.</p>

<div class="lesson-code">
<span class="hl-comment">&lt;!-- div: block container (takes full width) --&gt;</span>
<span class="hl-tag">&lt;div</span> <span class="hl-attr">class</span>=<span class="hl-string">"card"</span><span class="hl-tag">&gt;</span>
  <span class="hl-tag">&lt;h3&gt;</span>Title<span class="hl-tag">&lt;/h3&gt;</span>
  <span class="hl-tag">&lt;p&gt;</span>Content inside the card.<span class="hl-tag">&lt;/p&gt;</span>
<span class="hl-tag">&lt;/div&gt;</span>

<span class="hl-comment">&lt;!-- span: inline container (flows with text) --&gt;</span>
<span class="hl-tag">&lt;p&gt;</span>This is <span class="hl-tag">&lt;span</span> <span class="hl-attr">class</span>=<span class="hl-string">"highlight"</span><span class="hl-tag">&gt;</span>highlighted<span class="hl-tag">&lt;/span&gt;</span> text.<span class="hl-tag">&lt;/p&gt;</span>
</div>

<h3>Semantic Grouping Alternatives</h3>
<p>Instead of generic <code>&lt;div&gt;</code>, use semantic tags when they fit the content's meaning.</p>

<div class="lesson-code">
<span class="hl-comment">&lt;!-- main: primary page content (one per page) --&gt;</span>
<span class="hl-tag">&lt;main&gt;</span>
  <span class="hl-tag">&lt;article&gt;</span>
    <span class="hl-comment">&lt;!-- article: self-contained content --&gt;</span>
    <span class="hl-tag">&lt;header&gt;</span><span class="hl-tag">&lt;h2&gt;</span>Blog Post<span class="hl-tag">&lt;/h2&gt;&lt;/header&gt;</span>
    <span class="hl-tag">&lt;section&gt;</span>
      <span class="hl-comment">&lt;!-- section: thematic grouping --&gt;</span>
      <span class="hl-tag">&lt;p&gt;</span>Post content here...<span class="hl-tag">&lt;/p&gt;</span>
    <span class="hl-tag">&lt;/section&gt;</span>
  <span class="hl-tag">&lt;/article&gt;</span>
<span class="hl-tag">&lt;/main&gt;</span>
</div>

<h3>When to Use Each</h3>
<table>
  <tr><th>Tag</th><th>Use When</th><th>Example</th></tr>
  <tr><td><code>&lt;div&gt;</code></td><td>No semantic meaning fits</td><td>Layout wrapper, styling container</td></tr>
  <tr><td><code>&lt;span&gt;</code></td><td>Inline text needs styling</td><td>Colored words, highlighted text</td></tr>
  <tr><td><code>&lt;section&gt;</code></td><td>Thematic group of content</td><td>Chapter, tab panel, form group</td></tr>
  <tr><td><code>&lt;article&gt;</code></td><td>Independent, reusable content</td><td>Blog post, comment, card</td></tr>
  <tr><td><code>&lt;main&gt;</code></td><td>Primary page content</td><td>Everything between header/footer</td></tr>
</table>

<h3>Grouping with Data Attributes</h3>
<div class="lesson-code">
<span class="hl-tag">&lt;div</span> <span class="hl-attr">class</span>=<span class="hl-string">"product"</span> <span class="hl-attr">data-category</span>=<span class="hl-string">"electronics"</span> <span class="hl-attr">data-price</span>=<span class="hl-string">"299"</span><span class="hl-tag">&gt;</span>
  <span class="hl-tag">&lt;h3&gt;</span>Laptop<span class="hl-tag">&lt;/h3&gt;</span>
  <span class="hl-tag">&lt;p&gt;</span>Fast and lightweight.<span class="hl-tag">&lt;/p&gt;</span>
<span class="hl-tag">&lt;/div&gt;</span>
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Avoid <code>&lt;div&gt;</code> soup (nesting too many divs). If a <code>&lt;div&gt;</code> wraps a navigation, use <code>&lt;nav&gt;</code> instead. If it wraps an article, use <code>&lt;article&gt;</code>.
</div>
        `
      },
      {
        id: 11,
        title: 'Block vs Inline Elements',
        desc: 'Understanding element display behavior and how to change it.',
        content: `
<h2>Block vs Inline Elements</h2>
<p>HTML elements have a default display behavior: they either start on a new line (block) or flow within text (inline).</p>

<h3>Block-Level Elements</h3>
<p>Block elements start on a new line and take up the full available width.</p>

<div class="lesson-code">
<span class="hl-comment">&lt;!-- Block elements always stack vertically --&gt;</span>
<span class="hl-tag">&lt;div&gt;</span>Full width block<span class="hl-tag">&lt;/div&gt;</span>
<span class="hl-tag">&lt;p&gt;</span>Another block<span class="hl-tag">&lt;/p&gt;</span>
<span class="hl-tag">&lt;h1&gt;</span>Heading is a block<span class="hl-tag">&lt;/h1&gt;</span>
<span class="hl-tag">&lt;ul&gt;</span>List is a block<span class="hl-tag">&lt;/ul&gt;</span>
<span class="hl-tag">&lt;table&gt;</span>Table is a block<span class="hl-tag">&lt;/table&gt;</span>
</div>

<h3>Inline Elements</h3>
<p>Inline elements flow within text and only take up as much width as needed.</p>

<div class="lesson-code">
<span class="hl-tag">&lt;p&gt;</span>
  This is a paragraph with
  <span class="hl-tag">&lt;strong&gt;</span>bold<span class="hl-tag">&lt;/strong&gt;</span>,
  <span class="hl-tag">&lt;em&gt;</span>italic<span class="hl-tag">&lt;/em&gt;</span>, and
  <span class="hl-tag">&lt;a</span> <span class="hl-attr">href</span>=<span class="hl-string">"#"</span><span class="hl-tag">&gt;</span>links<span class="hl-tag">&lt;/a&gt;</span>
  all flowing on the same line.
<span class="hl-tag">&lt;/p&gt;</span>
</div>

<h3>Key Differences</h3>
<table>
  <tr><th>Property</th><th>Block</th><th>Inline</th></tr>
  <tr><td>New line</td><td>Yes</td><td>No</td></tr>
  <tr><td>Width/Height</td><td>Respects (full width)</td><td>Ignores</td></tr>
  <tr><td>Margin (top/bottom)</td><td>Yes</td><td>No effect</td></tr>
  <tr><td>Margin (left/right)</td><td>Yes</td><td>Yes</td></tr>
  <tr><td>Padding</td><td>All sides</td><td>Horizontal only (visual only)</td></tr>
  <tr><td>Examples</td><td>div, p, h1-h6, ul, li</td><td>span, a, strong, em, img</td></tr>
</table>

<h3>Changing Display with CSS</h3>
<div class="lesson-code">
<span class="hl-comment">/* Make a span behave like a block */</span>
<span class="hl-selector">span.block-span</span> {
  <span class="hl-prop">display</span>: <span class="hl-value">block</span>;
  <span class="hl-prop">width</span>: <span class="hl-number">200px</span>;
  <span class="hl-prop">height</span>: <span class="hl-number">100px</span>;
  <span class="hl-prop">background</span>: <span class="hl-value">lightblue</span>;
}

<span class="hl-comment">/* Make a div flow inline */</span>
<span class="hl-selector">div.inline-div</span> {
  <span class="hl-prop">display</span>: <span class="hl-value">inline</span>;
}

<span class="hl-comment">/* Inline-block: inline flow + width/height */</span>
<span class="hl-selector">.badge</span> {
  <span class="hl-prop">display</span>: <span class="hl-value">inline-block</span>;
  <span class="hl-prop">padding</span>: <span class="hl-number">4px</span> <span class="hl-number">12px</span>;
  <span class="hl-prop">background</span>: <span class="hl-value">#333</span>;
  <span class="hl-prop">color</span>: <span class="hl-value">white</span>;
  <span class="hl-prop">border-radius</span>: <span class="hl-number">4px</span>;
}
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> For modern layouts, use Flexbox or Grid instead of relying on block/inline behavior. But understanding these basics is essential for working with inline elements like badges, tags, and links.
</div>
        `
      },
      {
        id: 12,
        title: 'HTML Comments',
        desc: 'Documenting your code with comments for future reference.',
        content: `
<h2>HTML Comments</h2>
<p>Comments are notes in your code that browsers ignore completely. They help developers understand, organize, and maintain the codebase.</p>

<h3>Comment Syntax</h3>
<div class="lesson-code">
<span class="hl-comment">&lt;!-- This is a single-line comment --&gt;</span>

<span class="hl-comment">&lt;!--
  This is a
  multi-line comment
  that spans several lines
--&gt;</span>
</div>

<h3>When to Use Comments</h3>
<ul>
  <li><strong>Explain complex sections:</strong> Describe why a certain approach was used</li>
  <li><strong>Mark sections:</strong> Identify parts of the page for easy navigation</li>
  <li><strong>Comment out code:</strong> Temporarily disable code without deleting it</li>
  <li><strong>Add TODOs:</strong> Mark areas that need future work</li>
</ul>

<div class="lesson-code">
<span class="hl-comment">&lt;!-- ===== HEADER SECTION ===== --&gt;</span>
<span class="hl-tag">&lt;header&gt;</span>
  <span class="hl-tag">&lt;nav&gt;</span>...<span class="hl-tag">&lt;/nav&gt;</span>
<span class="hl-tag">&lt;/header&gt;</span>

<span class="hl-comment">&lt;!-- TODO: Add search functionality here --&gt;</span>
<span class="hl-tag">&lt;div</span> <span class="hl-attr">class</span>=<span class="hl-string">"search-bar"</span><span class="hl-tag">&gt;</span>
  <span class="hl-comment">&lt;!-- Search input goes here --&gt;</span>
<span class="hl-tag">&lt;/div&gt;</span>

<span class="hl-comment">&lt;!-- Deprecated: Do not use this layout
&lt;div class="old-layout"&gt;...&lt;/div&gt;
--&gt;</span>
</div>

<h3>Comments in the Browser</h3>
<p>When you view page source or use browser developer tools (F12), you will see your HTML comments. Keep that in mind  -  do not put sensitive information in comments.</p>

<pre class="lesson-code" data-try="html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;Comments Example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;!-- This heading is the page title --&gt;
  &lt;h1&gt;Welcome!&lt;/h1&gt;

  &lt;!--
    Navigation will be added here
    after the design is approved.
    Target date: next sprint.
  --&gt;
  &lt;nav&gt;
    &lt;a href="/"&gt;Home&lt;/a&gt;
    &lt;a href="/about"&gt;About&lt;/a&gt;
  &lt;/nav&gt;

  &lt;!-- &lt;p&gt;This paragraph is hidden&lt;/p&gt; --&gt;
  &lt;p&gt;This paragraph is visible!&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<h3>Common Mistakes</h3>
<ul>
  <li>Comments cannot contain <code>--</code> inside them: <code>&lt;!-- bad --comment --&gt;</code></li>
  <li>Comments cannot be nested: <code>&lt;!-- &lt;!--inner--&gt; --&gt;</code> breaks</li>
  <li>Never hide credentials, API keys, or private URLs in comments</li>
</ul>

<div class="lesson-tip">
  <strong>Tip:</strong> Good comments explain <strong>why</strong>, not <strong>what</strong>. Instead of <code>&lt;!-- This is a heading --&gt;</code>, write <code>&lt;!-- Section heading for the product launch --&gt;</code>.
</div>
        `
      },
      {
        id: 13,
        title: 'HTML Entities & Symbols',
        desc: 'Using special characters and symbols in HTML.',
        content: `
<h2>HTML Entities &amp; Symbols</h2>
<p>HTML entities let you display reserved characters and special symbols that cannot be typed directly or have special meaning in HTML.</p>

<h3>Entity Syntax</h3>
<p>Entities follow the format: <code>&amp;name;</code> or <code>&amp;#number;</code></p>

<div class="lesson-code">
<span class="hl-comment">&lt;!-- By name --&gt;</span>
&amp;lt;   <span class="hl-comment">&lt;!-- less than: < --&gt;</span>
&amp;gt;   <span class="hl-comment">&lt;!-- greater than: > --&gt;</span>
&amp;amp;   <span class="hl-comment">&lt;!-- ampersand: & --&gt;</span>

<span class="hl-comment">&lt;!-- By numeric code --&gt;</span>
&amp;#60;   <span class="hl-comment">&lt;!-- also < --&gt;</span>
&amp;#62;   <span class="hl-comment">&lt;!-- also > --&gt;</span>
</div>

<h3>Common HTML Entities</h3>
<table>
  <tr><th>Entity</th><th>Code</th><th>Character</th><th>Use Case</th></tr>
  <tr><td><code>&amp;amp;</code></td><td>&amp;amp;</td><td>&amp;</td><td>Ampersand in text</td></tr>
  <tr><td><code>&amp;lt;</code></td><td>&amp;lt;</td><td>&lt;</td><td>Less-than sign</td></tr>
  <tr><td><code>&amp;gt;</code></td><td>&amp;gt;</td><td>&gt;</td><td>Greater-than sign</td></tr>
  <tr><td><code>&amp;nbsp;</code></td><td>&amp;nbsp;</td><td>Space</td><td>Non-breaking space</td></tr>
  <tr><td><code>&amp;copy;</code></td><td>&amp;copy;</td><td>&copy;</td><td>Copyright symbol</td></tr>
  <tr><td><code>&amp;reg;</code></td><td>&amp;reg;</td><td>&reg;</td><td>Registered trademark</td></tr>
  <tr><td><code>&amp;trade;</code></td><td>&amp;trade;</td><td>&trade;</td><td>Trademark symbol</td></tr>
  <tr><td><code>&amp;mdash;</code></td><td>&amp;mdash;</td><td>&mdash;</td><td>Em dash</td></tr>
  <tr><td><code>&amp;ndash;</code></td><td>&amp;ndash;</td><td>&ndash;</td><td>En dash</td></tr>
  <tr><td><code>&amp;quot;</code></td><td>&amp;quot;</td><td>"</td><td>Double quote in attributes</td></tr>
</table>

<h3>Non-Breaking Spaces</h3>
<p><code>&amp;nbsp;</code> prevents line breaks at that position and collapses multiple spaces.</p>

<div class="lesson-code">
<span class="hl-comment">&lt;!-- Normal spaces collapse: "A  B  C" becomes "A B C" --&gt;</span>
<span class="hl-tag">&lt;p&gt;</span>A  B  C<span class="hl-tag">&lt;/p&gt;</span>

<span class="hl-comment">&lt;!-- nbsp keeps spaces and prevents wrapping --&gt;</span>
<span class="hl-tag">&lt;p&gt;</span>A &amp;nbsp; B &amp;nbsp; C<span class="hl-tag">&lt;/p&gt;</span>
<span class="hl-tag">&lt;p&gt;</span>100&amp;nbsp;km<span class="hl-tag">&lt;/p&gt;</span>  <span class="hl-comment">&lt;!-- "100 km" won't break apart --&gt;</span>
</div>

<h3>Displaying Code in HTML</h3>
<p>When showing code examples, you must escape HTML characters.</p>

<pre class="lesson-code" data-try="html">&lt;p&gt;Showing HTML code without entities:&lt;/p&gt;
&lt;code&gt;&amp;lt;p&amp;gt;Hello &amp;amp; Welcome!&amp;lt;/p&amp;gt;&lt;/code&gt;

&lt;p&gt;Special symbols and emoji:&lt;/p&gt;
&lt;p&gt;Arrow: &amp;rarr; &amp;rarr; &amp;clubs; &amp;hearts; &amp;diams;&lt;/p&gt;
&lt;p&gt;Copyright: &amp;copy; 2026 My Company&lt;/p&gt;
&lt;p&gt;Currency: $ &amp;euro; &amp;pound; &amp;yen;&lt;/p&gt;
&lt;p&gt;Math: &amp;plusmn; &amp;times; &amp;divide; &amp;ne;&lt;/p&gt;</pre>

<div class="lesson-tip">
  <strong>Tip:</strong> The most critical entities to remember are <code>&amp;amp;</code>, <code>&amp;lt;</code>, and <code>&amp;gt;</code>. Any time you display HTML code as text, these three must be escaped.
</div>
        `
      },
      {
        id: 14,
        title: 'HTML Head & Meta Tags',
        desc: 'Configuring the head section for SEO, sharing, and performance.',
        content: `
<h2>HTML Head &amp; Meta Tags</h2>
<p>The <code>&lt;head&gt;</code> section contains metadata about the page that is not displayed to users but is crucial for browsers, search engines, and social media.</p>

<h3>Essential Head Elements</h3>
<div class="lesson-code">
<span class="hl-tag">&lt;head&gt;</span>
  <span class="hl-tag">&lt;meta</span> <span class="hl-attr">charset</span>=<span class="hl-string">"UTF-8"</span><span class="hl-tag">&gt;</span>
  <span class="hl-tag">&lt;title&gt;</span>Page Title - Site Name<span class="hl-tag">&lt;/title&gt;</span>
  <span class="hl-tag">&lt;meta</span> <span class="hl-attr">name</span>=<span class="hl-string">"description"</span> <span class="hl-attr">content</span>=<span class="hl-string">"A 150-160 character description for search engines."</span><span class="hl-tag">&gt;</span>
  <span class="hl-tag">&lt;meta</span> <span class="hl-attr">name</span>=<span class="hl-string">"viewport"</span> <span class="hl-attr">content</span>=<span class="hl-string">"width=device-width, initial-scale=1.0"</span><span class="hl-tag">&gt;</span>
  <span class="hl-tag">&lt;link</span> <span class="hl-attr">rel</span>=<span class="hl-string">"icon"</span> <span class="hl-attr">href</span>=<span class="hl-string">"/favicon.ico"</span><span class="hl-tag">&gt;</span>
<span class="hl-tag">&lt;/head&gt;</span>
</div>

<h3>Viewport Meta Tag</h3>
<p>This tag is required for responsive design. Without it, mobile browsers render pages at desktop width.</p>

<div class="lesson-code">
<span class="hl-comment">&lt;!-- Standard responsive viewport --&gt;</span>
<span class="hl-tag">&lt;meta</span> <span class="hl-attr">name</span>=<span class="hl-string">"viewport"</span> <span class="hl-attr">content</span>=<span class="hl-string">"width=device-width, initial-scale=1.0"</span><span class="hl-tag">&gt;</span>
</div>

<h3>Open Graph Tags (Social Sharing)</h3>
<div class="lesson-code">
<span class="hl-tag">&lt;meta</span> <span class="hl-attr">property</span>=<span class="hl-string">"og:title"</span> <span class="hl-attr">content</span>=<span class="hl-string">"Page Title"</span><span class="hl-tag">&gt;</span>
<span class="hl-tag">&lt;meta</span> <span class="hl-attr">property</span>=<span class="hl-string">"og:description"</span> <span class="hl-attr">content</span>=<span class="hl-string">"Description for social media."</span><span class="hl-tag">&gt;</span>
<span class="hl-tag">&lt;meta</span> <span class="hl-attr">property</span>=<span class="hl-string">"og:image"</span> <span class="hl-attr">content</span>=<span class="hl-string">"https://example.com/og-image.jpg"</span><span class="hl-tag">&gt;</span>
<span class="hl-tag">&lt;meta</span> <span class="hl-attr">property</span>=<span class="hl-string">"og:url"</span> <span class="hl-attr">content</span>=<span class="hl-string">"https://example.com/page"</span><span class="hl-tag">&gt;</span>
</div>

<h3>Canonical URL</h3>
<p>Prevents duplicate content issues by specifying the preferred version of a page.</p>

<div class="lesson-code">
<span class="hl-tag">&lt;link</span> <span class="hl-attr">rel</span>=<span class="hl-string">"canonical"</span> <span class="hl-attr">href</span>=<span class="hl-string">"https://example.com/this-page"</span><span class="hl-tag">&gt;</span>
</div>

<h3>Favicons &amp; Apple Touch Icons</h3>
<div class="lesson-code">
<span class="hl-tag">&lt;link</span> <span class="hl-attr">rel</span>=<span class="hl-string">"icon"</span> <span class="hl-attr">href</span>=<span class="hl-string">"/favicon.ico"</span> <span class="hl-attr">sizes</span>=<span class="hl-string">"32x32"</span><span class="hl-tag">&gt;</span>
<span class="hl-tag">&lt;link</span> <span class="hl-attr">rel</span>=<span class="hl-string">"icon"</span> <span class="hl-attr">href</span>=<span class="hl-string">"/icon.svg"</span> <span class="hl-attr">type</span>=<span class="hl-string">"image/svg+xml"</span><span class="hl-tag">&gt;</span>
<span class="hl-tag">&lt;link</span> <span class="hl-attr">rel</span>=<span class="hl-string">"apple-touch-icon"</span> <span class="hl-attr">href</span>=<span class="hl-string">"/apple-touch-icon.png"</span><span class="hl-tag">&gt;</span>
</div>

<h3>Complete Head Example</h3>
<pre class="lesson-code" data-try="html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;My Awesome Site&lt;/title&gt;
  &lt;meta name="description" content="Learn web development with interactive lessons."&gt;
  &lt;link rel="icon" href="/favicon.ico"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Check the page source to see the head!&lt;/h1&gt;
  &lt;p&gt;Right-click and select "View Page Source".&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<div class="lesson-tip">
  <strong>Tip:</strong> Keep your title under 60 characters and your meta description under 160 characters. These appear in search engine results and directly affect click-through rates.
</div>
        `
      },
      {
        id: 15,
        title: 'HTML Tables Advanced',
        desc: 'Complex tables with merged cells, sections, and accessibility.',
        content: `
<h2>HTML Tables Advanced</h2>
<p>Advanced tables use colspan, rowspan, and semantic grouping for complex data layouts. Accessibility features ensure screen readers interpret them correctly.</p>

<h3>Colspan (Merge Columns)</h3>
<div class="lesson-code">
<span class="hl-tag">&lt;table&gt;</span>
  <span class="hl-tag">&lt;tr&gt;</span>
    <span class="hl-tag">&lt;th</span> <span class="hl-attr">colspan</span>=<span class="hl-string">"3"</span><span class="hl-tag">&gt;</span>Quarterly Report<span class="hl-tag">&lt;/th&gt;</span>
  <span class="hl-tag">&lt;/tr&gt;</span>
  <span class="hl-tag">&lt;tr&gt;</span>
    <span class="hl-tag">&lt;th&gt;</span>Q1<span class="hl-tag">&lt;/th&gt;</span>
    <span class="hl-tag">&lt;th&gt;</span>Q2<span class="hl-tag">&lt;/th&gt;</span>
    <span class="hl-tag">&lt;th&gt;</span>Q3<span class="hl-tag">&lt;/th&gt;</span>
  <span class="hl-tag">&lt;/tr&gt;</span>
  <span class="hl-tag">&lt;tr&gt;</span>
    <span class="hl-tag">&lt;td&gt;</span>$10k<span class="hl-tag">&lt;/td&gt;</span>
    <span class="hl-tag">&lt;td&gt;</span>$12k<span class="hl-tag">&lt;/td&gt;</span>
    <span class="hl-tag">&lt;td&gt;</span>$15k<span class="hl-tag">&lt;/td&gt;</span>
  <span class="hl-tag">&lt;/tr&gt;</span>
<span class="hl-tag">&lt;/table&gt;</span>
</div>

<h3>Rowspan (Merge Rows)</h3>
<div class="lesson-code">
<span class="hl-tag">&lt;table&gt;</span>
  <span class="hl-tag">&lt;tr&gt;</span>
    <span class="hl-tag">&lt;th&gt;</span>Name<span class="hl-tag">&lt;/th&gt;</span>
    <span class="hl-tag">&lt;th&gt;</span>Subject<span class="hl-tag">&lt;/th&gt;</span>
    <span class="hl-tag">&lt;th&gt;</span>Score<span class="hl-tag">&lt;/th&gt;</span>
  <span class="hl-tag">&lt;/tr&gt;</span>
  <span class="hl-tag">&lt;tr&gt;</span>
    <span class="hl-tag">&lt;td</span> <span class="hl-attr">rowspan</span>=<span class="hl-string">"2"</span><span class="hl-tag">&gt;</span>Alice<span class="hl-tag">&lt;/td&gt;</span>
    <span class="hl-tag">&lt;td&gt;</span>Math<span class="hl-tag">&lt;/td&gt;</span>
    <span class="hl-tag">&lt;td&gt;</span>95<span class="hl-tag">&lt;/td&gt;</span>
  <span class="hl-tag">&lt;/tr&gt;</span>
  <span class="hl-tag">&lt;tr&gt;</span>
    <span class="hl-tag">&lt;td&gt;</span>Science<span class="hl-tag">&lt;/td&gt;</span>
    <span class="hl-tag">&lt;td&gt;</span>88<span class="hl-tag">&lt;/td&gt;</span>
  <span class="hl-tag">&lt;/tr&gt;</span>
<span class="hl-tag">&lt;/table&gt;</span>
</div>

<h3>Semantic Table Structure</h3>
<p>Use <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code>, and <code>&lt;caption&gt;</code> for better structure and accessibility.</p>

<pre class="lesson-code" data-try="html">&lt;table&gt;
  &lt;caption&gt;Employee Salary Report&lt;/caption&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th scope="col"&gt;Name&lt;/th&gt;
      &lt;th scope="col"&gt;Department&lt;/th&gt;
      &lt;th scope="col"&gt;Salary&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th scope="row"&gt;Alice&lt;/th&gt;
      &lt;td&gt;Engineering&lt;/td&gt;
      &lt;td&gt;$95,000&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope="row"&gt;Bob&lt;/th&gt;
      &lt;td colspan="2"&gt;On Leave&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope="row"&gt;Carol&lt;/th&gt;
      &lt;td&gt;Design&lt;/td&gt;
      &lt;td&gt;$85,000&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
  &lt;tfoot&gt;
    &lt;tr&gt;
      &lt;td colspan="2"&gt;Average&lt;/td&gt;
      &lt;td&gt;$90,000&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tfoot&gt;
&lt;/table&gt;</pre>

<h3>Table Accessibility Tips</h3>
<ul>
  <li>Always use <code>&lt;th&gt;</code> for header cells</li>
  <li>Use <code>scope="col"</code> or <code>scope="row"</code> on headers</li>
  <li>Include <code>&lt;caption&gt;</code> to describe the table</li>
  <li>Use <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code> for grouping</li>
</ul>

<div class="lesson-tip">
  <strong>Tip:</strong> Tables should be used for <strong>tabular data</strong> only, not for page layout. Use CSS Grid or Flexbox for layout purposes.
</div>
        `
      },
      {
        id: 16,
        title: 'HTML Forms & Validation',
        desc: 'Built-in validation without JavaScript using HTML attributes.',
        content: `
<h2>HTML Forms &amp; Validation</h2>
<p>HTML5 provides built-in form validation through attributes  -  no JavaScript required. This improves user experience and data quality.</p>

<h3>Required Fields</h3>
<div class="lesson-code">
<span class="hl-tag">&lt;form&gt;</span>
  <span class="hl-tag">&lt;input</span> <span class="hl-attr">type</span>=<span class="hl-string">"text"</span> <span class="hl-attr">name</span>=<span class="hl-string">"name"</span> <span class="hl-attr">required</span> <span class="hl-attr">placeholder</span>=<span class="hl-string">"Enter name"</span><span class="hl-tag">&gt;</span>
  <span class="hl-tag">&lt;button</span> <span class="hl-attr">type</span>=<span class="hl-string">"submit"</span><span class="hl-tag">&gt;</span>Submit<span class="hl-tag">&lt;/button&gt;</span>
<span class="hl-tag">&lt;/form&gt;</span>
</div>

<h3>Input Type Validation</h3>
<p>Using the correct <code>type</code> attribute triggers browser validation automatically.</p>

<div class="lesson-code">
<span class="hl-comment">&lt;!-- Email: checks for @ symbol --&gt;</span>
<span class="hl-tag">&lt;input</span> <span class="hl-attr">type</span>=<span class="hl-string">"email"</span> <span class="hl-attr">required</span><span class="hl-tag">&gt;</span>

<span class="hl-comment">&lt;!-- URL: checks for valid URL format --&gt;</span>
<span class="hl-tag">&lt;input</span> <span class="hl-attr">type</span>=<span class="hl-string">"url"</span><span class="hl-tag">&gt;</span>

<span class="hl-comment">&lt;!-- Number: only allows numbers --&gt;</span>
<span class="hl-tag">&lt;input</span> <span class="hl-attr">type</span>=<span class="hl-string">"number"</span> <span class="hl-attr">min</span>=<span class="hl-string">"1"</span> <span class="hl-attr">max</span>=<span class="hl-string">"100"</span><span class="hl-tag">&gt;</span>

<span class="hl-comment">&lt;!-- Date: shows date picker --&gt;</span>
<span class="hl-tag">&lt;input</span> <span class="hl-attr">type</span>=<span class="hl-string">"date"</span> <span class="hl-attr">min</span>=<span class="hl-string">"2026-01-01"</span> <span class="hl-attr">max</span>=<span class="hl-string">"2026-12-31"</span><span class="hl-tag">&gt;</span>
</div>

<h3>Pattern Matching (Regex)</h3>
<p>The <code>pattern</code> attribute validates input against a regular expression.</p>

<div class="lesson-code">
<span class="hl-comment">&lt;!-- Phone: US format --&gt;</span>
<span class="hl-tag">&lt;input</span> <span class="hl-attr">type</span>=<span class="hl-string">"tel"</span> <span class="hl-attr">pattern</span>=<span class="hl-string">"[0-9]{3}-[0-9]{3}-[0-9]{4}"</span> <span class="hl-attr">placeholder</span>=<span class="hl-string">"123-456-7890"</span><span class="hl-tag">&gt;</span>

<span class="hl-comment">&lt;!-- Username: 3-16 characters, letters and numbers --&gt;</span>
<span class="hl-tag">&lt;input</span> <span class="hl-attr">type</span>=<span class="hl-string">"text"</span> <span class="hl-attr">pattern</span>=<span class="hl-string">"[A-Za-z0-9_]{3,16}"</span><span class="hl-tag">&gt;</span>

<span class="hl-comment">&lt;!-- title attribute shows on validation error --&gt;</span>
<span class="hl-tag">&lt;input</span> <span class="hl-attr">pattern</span>=<span class="hl-string">"[0-9]{5}"</span> <span class="hl-attr">title</span>=<span class="hl-string">"Please enter a 5-digit zip code"</span><span class="hl-tag">&gt;</span>
</div>

<h3>Text Length Validation</h3>
<div class="lesson-code">
<span class="hl-tag">&lt;textarea</span> <span class="hl-attr">minlength</span>=<span class="hl-string">"10"</span> <span class="hl-attr">maxlength</span>=<span class="hl-string">"500"</span> <span class="hl-attr">required</span><span class="hl-tag">&gt;&lt;/textarea&gt;</span>
<span class="hl-tag">&lt;input</span> <span class="hl-attr">minlength</span>=<span class="hl-string">"8"</span> <span class="hl-attr">type</span>=<span class="hl-string">"password"</span> <span class="hl-attr">required</span><span class="hl-tag">&gt;</span>
</div>

<h3>Complete Form Example</h3>
<pre class="lesson-code" data-try="html">&lt;form style="max-width:400px;margin:20px;"&gt;
  &lt;h3&gt;Registration Form&lt;/h3&gt;

  &lt;label&gt;Name (required):&lt;br&gt;
    &lt;input type="text" required minlength="2" style="width:100%;margin:4px 0 12px;"&gt;
  &lt;/label&gt;

  &lt;label&gt;Email (required):&lt;br&gt;
    &lt;input type="email" required style="width:100%;margin:4px 0 12px;"&gt;
  &lt;/label&gt;

  &lt;label&gt;Age (18-120):&lt;br&gt;
    &lt;input type="number" min="18" max="120" style="width:100%;margin:4px 0 12px;"&gt;
  &lt;/label&gt;

  &lt;label&gt;Password (min 8 chars):&lt;br&gt;
    &lt;input type="password" minlength="8" required style="width:100%;margin:4px 0 12px;"&gt;
  &lt;/label&gt;

  &lt;button type="submit" style="padding:8px 24px;"&gt;Register&lt;/button&gt;
&lt;/form&gt;</pre>

<div class="lesson-tip">
  <strong>Tip:</strong> HTML validation is a first line of defense. Always also validate on the server, as HTML validation can be bypassed by tech-savvy users.
</div>
        `
      },
      {
        id: 17,
        title: 'HTML Media Elements',
        desc: 'Displaying images with modern formats and responsive techniques.',
        content: `
<h2>HTML Media Elements</h2>
<p>Modern HTML provides powerful ways to display images with multiple formats, responsive sizing, and lazy loading for optimal performance.</p>

<h3>Image Formats Comparison</h3>
<table>
  <tr><th>Format</th><th>Best For</th><th>Transparency</th><th>Animation</th><th>Size</th></tr>
  <tr><td><strong>JPEG</strong></td><td>Photographs</td><td>No</td><td>No</td><td>Small</td></tr>
  <tr><td><strong>PNG</strong></td><td>Graphics, screenshots</td><td>Yes</td><td>No</td><td>Medium</td></tr>
  <tr><td><strong>WebP</strong></td><td>Everything (modern)</td><td>Yes</td><td>Yes</td><td>Smallest</td></tr>
  <tr><td><strong>SVG</strong></td><td>Icons, logos, illustrations</td><td>Yes</td><td>Yes</td><td>Tiny</td></tr>
  <tr><td><strong>AVIF</strong></td><td>Photographs (newest)</td><td>Yes</td><td>Yes</td><td>Tiny</td></tr>
</table>

<h3>The picture Element (Art Direction)</h3>
<p>Show different image versions based on screen size or format support.</p>

<div class="lesson-code">
<span class="hl-tag">&lt;picture&gt;</span>
  <span class="hl-tag">&lt;source</span> <span class="hl-attr">srcset</span>=<span class="hl-string">"hero.avif"</span> <span class="hl-attr">type</span>=<span class="hl-string">"image/avif"</span><span class="hl-tag">&gt;</span>
  <span class="hl-tag">&lt;source</span> <span class="hl-attr">srcset</span>=<span class="hl-string">"hero.webp"</span> <span class="hl-attr">type</span>=<span class="hl-string">"image/webp"</span><span class="hl-tag">&gt;</span>
  <span class="hl-tag">&lt;img</span> <span class="hl-attr">src</span>=<span class="hl-string">"hero.jpg"</span> <span class="hl-attr">alt</span>=<span class="hl-string">"Hero banner"</span> <span class="hl-attr">width</span>=<span class="hl-string">"800"</span> <span class="hl-attr">height</span>=<span class="hl-string">"400"</span><span class="hl-tag">&gt;</span>
<span class="hl-tag">&lt;/picture&gt;</span>
</div>

<h3>figure &amp; figcaption</h3>
<p>Semantically caption images, code blocks, or media.</p>

<div class="lesson-code">
<span class="hl-tag">&lt;figure&gt;</span>
  <span class="hl-tag">&lt;img</span> <span class="hl-attr">src</span>=<span class="hl-string">"chart.png"</span> <span class="hl-attr">alt</span>=<span class="hl-string">"Sales chart 2026"</span><span class="hl-tag">&gt;</span>
  <span class="hl-tag">&lt;figcaption&gt;</span>Figure 1: Quarterly sales growth<span class="hl-tag">&lt;/figcaption&gt;</span>
<span class="hl-tag">&lt;/figure&gt;</span>
</div>

<h3>Lazy Loading</h3>
<p>Delay loading of off-screen images for faster initial page load.</p>

<div class="lesson-code">
<span class="hl-comment">&lt;!-- Native lazy loading (no JS needed) --&gt;</span>
<span class="hl-tag">&lt;img</span> <span class="hl-attr">src</span>=<span class="hl-string">"photo.webp"</span> <span class="hl-attr">alt</span>=<span class="hl-string">"Description"</span> <span class="hl-attr">loading</span>=<span class="hl-string">"lazy"</span> <span class="hl-attr">width</span>=<span class="hl-string">"400"</span> <span class="hl-attr">height</span>=<span class="hl-string">"300"</span><span class="hl-tag">&gt;</span>
</div>

<h3>Responsive Images with srcset</h3>
<div class="lesson-code">
<span class="hl-tag">&lt;img</span>
  <span class="hl-attr">src</span>=<span class="hl-string">"photo-800.jpg"</span>
  <span class="hl-attr">srcset</span>=<span class="hl-string">"photo-400.jpg 400w, photo-800.jpg 800w, photo-1200.jpg 1200w"</span>
  <span class="hl-attr">sizes</span>=<span class="hl-string">"(max-width: 600px) 100vw, 50vw"</span>
  <span class="hl-attr">alt</span>=<span class="hl-string">"Responsive photo"</span>
<span class="hl-tag">&gt;</span>
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Always serve images in modern formats (WebP) with a JPEG/PNG fallback using <code>&lt;picture&gt;</code>. Always set <code>width</code> and <code>height</code> attributes to prevent layout shifts.
</div>
        `
      },
      {
        id: 18,
        title: 'HTML Audio & Video',
        desc: 'Embedding multimedia content with native HTML elements.',
        content: `
<h2>HTML Audio &amp; Video</h2>
<p>HTML provides native <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> elements for embedding multimedia without plugins.</p>

<h3>The Video Element</h3>
<div class="lesson-code">
<span class="hl-tag">&lt;video</span> <span class="hl-attr">controls</span> <span class="hl-attr">width</span>=<span class="hl-string">"640"</span> <span class="hl-attr">poster</span>=<span class="hl-string">"thumbnail.jpg"</span><span class="hl-tag">&gt;</span>
  <span class="hl-tag">&lt;source</span> <span class="hl-attr">src</span>=<span class="hl-string">"video.mp4"</span> <span class="hl-attr">type</span>=<span class="hl-string">"video/mp4"</span><span class="hl-tag">&gt;</span>
  <span class="hl-tag">&lt;source</span> <span class="hl-attr">src</span>=<span class="hl-string">"video.webm"</span> <span class="hl-attr">type</span>=<span class="hl-string">"video/webm"</span><span class="hl-tag">&gt;</span>
  <span class="hl-tag">&lt;p&gt;</span>Your browser does not support HTML video.<span class="hl-tag">&lt;/p&gt;</span>
<span class="hl-tag">&lt;/video&gt;</span>
</div>

<h3>Video Attributes</h3>
<ul>
  <li><strong>controls</strong>  -  Shows play/pause/volume controls</li>
  <li><strong>autoplay</strong>  -  Plays automatically (often blocked by browsers)</li>
  <li><strong>muted</strong>  -  Starts muted (required for autoplay to work)</li>
  <li><strong>loop</strong>  -  Replays the video when it ends</li>
  <li><strong>poster</strong>  -  Image shown before the video plays</li>
  <li><strong>preload</strong>  -  <code>none</code>, <code>metadata</code>, or <code>auto</code></li>
</ul>

<h3>The Audio Element</h3>
<div class="lesson-code">
<span class="hl-tag">&lt;audio</span> <span class="hl-attr">controls</span><span class="hl-tag">&gt;</span>
  <span class="hl-tag">&lt;source</span> <span class="hl-attr">src</span>=<span class="hl-string">"song.mp3"</span> <span class="hl-attr">type</span>=<span class="hl-string">"audio/mpeg"</span><span class="hl-tag">&gt;</span>
  <span class="hl-tag">&lt;source</span> <span class="hl-attr">src</span>=<span class="hl-string">"song.ogg"</span> <span class="hl-attr">type</span>=<span class="hl-string">"audio/ogg"</span><span class="hl-tag">&gt;</span>
  <span class="hl-tag">&lt;p&gt;</span>Your browser does not support HTML audio.<span class="hl-tag">&lt;/p&gt;</span>
<span class="hl-tag">&lt;/audio&gt;</span>
</div>

<h3>Embedding YouTube Videos</h3>
<p>YouTube and other platforms use <code>&lt;iframe&gt;</code> for embedding.</p>

<div class="lesson-code">
<span class="hl-tag">&lt;iframe</span>
  <span class="hl-attr">width</span>=<span class="hl-string">"560"</span>
  <span class="hl-attr">height</span>=<span class="hl-string">"315"</span>
  <span class="hl-attr">src</span>=<span class="hl-string">"https://www.youtube.com/embed/VIDEO_ID"</span>
  <span class="hl-attr">title</span>=<span class="hl-string">"Video title"</span>
  <span class="hl-attr">allow</span>=<span class="hl-string">"accelerometer; autoplay; clipboard-write; encrypted-media"</span>
  <span class="hl-attr">allowfullscreen</span><span class="hl-tag">&gt;</span>
<span class="hl-tag">&lt;/iframe&gt;</span>
</div>

<h3>HTML5 Video with Fallbacks</h3>
<pre class="lesson-code" data-try="html">&lt;div style="max-width:640px;margin:20px;"&gt;
  &lt;h3&gt;HTML5 Video Demo&lt;/h3&gt;
  &lt;video controls width="100%" poster=""&gt;
    &lt;source src="sample.mp4" type="video/mp4"&gt;
    &lt;p&gt;Your browser doesn't support HTML5 video.
       &lt;a href="sample.mp4"&gt;Download the video&lt;/a&gt; instead.&lt;/p&gt;
  &lt;/video&gt;
  &lt;p&gt;Video formats: MP4 (best support), WebM (open source).&lt;/p&gt;
&lt;/div&gt;</pre>

<h3>Best Practices</h3>
<ul>
  <li>Provide multiple <code>&lt;source&gt;</code> elements for browser compatibility</li>
  <li>Always include a fallback message for unsupported browsers</li>
  <li>Use <code>poster</code> for video to show a preview before loading</li>
  <li>Use <code>preload="metadata"</code> to avoid loading large files unnecessarily</li>
  <li>Don't autoplay with sound  -  it frustrates users</li>
</ul>

<div class="lesson-tip">
  <strong>Tip:</strong> Self-hosted video gives you more control. Consider services like Cloudflare Stream or Mux for hosting and transcoding video files.
</div>
        `
      },
      {
        id: 19,
        title: 'HTML Iframes',
        desc: 'Embedding external content and understanding security implications.',
        content: `
<h2>HTML Iframes</h2>
<p>The <code>&lt;iframe&gt;</code> element embeds another HTML document within the current page. It is commonly used for maps, videos, and third-party widgets.</p>

<h3>Basic Usage</h3>
<div class="lesson-code">
<span class="hl-tag">&lt;iframe</span>
  <span class="hl-attr">src</span>=<span class="hl-string">"https://example.com"</span>
  <span class="hl-attr">width</span>=<span class="hl-string">"800"</span>
  <span class="hl-attr">height</span>=<span class="hl-string">"600"</span>
  <span class="hl-attr">title</span>=<span class="hl-string">"Description for accessibility"</span><span class="hl-tag">&gt;</span>
<span class="hl-tag">&lt;/iframe&gt;</span>
</div>

<h3>The sandbox Attribute</h3>
<p>Restricts what the embedded content can do. This is a critical security feature.</p>

<div class="lesson-code">
<span class="hl-comment">&lt;!-- Allow scripts but nothing else --&gt;</span>
<span class="hl-tag">&lt;iframe</span> <span class="hl-attr">src</span>=<span class="hl-string">"page.html"</span> <span class="hl-attr">sandbox</span>=<span class="hl-string">"allow-scripts"</span><span class="hl-tag">&gt;&lt;/iframe&gt;</span>

<span class="hl-comment">&lt;!-- Allow forms and scripts --&gt;</span>
<span class="hl-tag">&lt;iframe</span> <span class="hl-attr">src</span>=<span class="hl-string">"page.html"</span> <span class="hl-attr">sandbox</span>=<span class="hl-string">"allow-forms allow-scripts"</span><span class="hl-tag">&gt;&lt;/iframe&gt;</span>

<span class="hl-comment">&lt;!-- Most permissive (still restricted) --&gt;</span>
<span class="hl-tag">&lt;iframe</span> <span class="hl-attr">src</span>=<span class="hl-string">"page.html"</span> <span class="hl-attr">sandbox</span>=<span class="hl-string">"allow-same-origin allow-scripts allow-forms"</span><span class="hl-tag">&gt;&lt;/iframe&gt;</span>
</div>

<h3>srcdoc for Inline Content</h3>
<p>Write HTML directly inside the iframe instead of loading an external file.</p>

<div class="lesson-code">
<span class="hl-tag">&lt;iframe</span>
  <span class="hl-attr">srcdoc</span>=<span class="hl-string">"&lt;h1&gt;Hello from iframe!&lt;/h1&gt;&lt;p&gt;This content is inline.&lt;/p&gt;"</span>
  <span class="hl-attr">width</span>=<span class="hl-string">"400"</span>
  <span class="hl-attr">height</span>=<span class="hl-string">"200"</span><span class="hl-tag">&gt;</span>
<span class="hl-tag">&lt;/iframe&gt;</span>
</div>

<h3>Making Iframes Responsive</h3>
<div class="lesson-code">
<span class="hl-tag">&lt;div</span> <span class="hl-attr">class</span>=<span class="hl-string">"responsive-iframe"</span><span class="hl-tag">&gt;</span>
  <span class="hl-tag">&lt;iframe</span> <span class="hl-attr">src</span>=<span class="hl-string">"https://maps.example.com"</span> <span class="hl-attr">width</span>=<span class="hl-string">"100%"</span> <span class="hl-attr">height</span>=<span class="hl-string">"450"</span> <span class="hl-attr">style</span>=<span class="hl-string">"border:0;"</span> <span class="hl-attr">allowfullscreen</span><span class="hl-tag">&gt;&lt;/iframe&gt;</span>
<span class="hl-tag">&lt;/div&gt;</span>

<span class="hl-comment">/* CSS for responsive iframe */</span>
<span class="hl-selector">.responsive-iframe</span> {
  <span class="hl-prop">position</span>: <span class="hl-value">relative</span>;
  <span class="hl-prop">padding-bottom</span>: <span class="hl-number">56.25%</span>;  <span class="hl-comment">/* 16:9 ratio */</span>
  <span class="hl-prop">height</span>: <span class="hl-number">0</span>;
  <span class="hl-prop">overflow</span>: <span class="hl-value">hidden</span>;
}
<span class="hl-selector">.responsive-iframe iframe</span> {
  <span class="hl-prop">position</span>: <span class="hl-value">absolute</span>;
  <span class="hl-prop">top</span>: <span class="hl-number">0</span>;
  <span class="hl-prop">left</span>: <span class="hl-number">0</span>;
  <span class="hl-prop">width</span>: <span class="hl-number">100%</span>;
  <span class="hl-prop">height</span>: <span class="hl-number">100%</span>;
}
</div>

<h3>Security Concerns</h3>
<ul>
  <li>Never embed untrusted content without <code>sandbox</code></li>
  <li>Use <code>allow-scripts</code> only when absolutely necessary</li>
  <li>Be aware of clickjacking attacks  -  attackers can overlay invisible iframes</li>
  <li>Use the <code>X-Frame-Options</code> header on your own site to prevent others from framing it</li>
</ul>

<div class="lesson-tip">
  <strong>Tip:</strong> Always include the <code>title</code> attribute on iframes for accessibility. Screen readers use it to describe the embedded content to users.
</div>
        `
      },
      {
        id: 20,
        title: 'HTML Data Attributes',
        desc: 'Storing custom data on elements for JavaScript interaction.',
        content: `
<h2>HTML Data Attributes</h2>
<p>Data attributes let you store custom information directly on HTML elements. They are accessible through both CSS selectors and JavaScript.</p>

<h3>Basic Syntax</h3>
<div class="lesson-code">
<span class="hl-comment">&lt;!-- Prefix any attribute name with data- --&gt;</span>
<span class="hl-tag">&lt;div</span>
  <span class="hl-attr">data-user-id</span>=<span class="hl-string">"42"</span>
  <span class="hl-attr">data-product-name</span>=<span class="hl-string">"Laptop"</span>
  <span class="hl-attr">data-in-stock</span>=<span class="hl-string">"true"</span>
  <span class="hl-attr">data-price</span>=<span class="hl-string">"999.99"</span>
<span class="hl-tag">&gt;</span>Product Card<span class="hl-tag">&lt;/div&gt;</span>
</div>

<h3>Accessing via JavaScript</h3>
<div class="lesson-code">
<span class="hl-keyword">const</span> el = <span class="hl-builtin">document</span>.<span class="hl-function">querySelector</span>(<span class="hl-string">"[data-product-name]"</span>);

<span class="hl-comment">// Via dataset API (camelCase conversion)</span>
<span class="hl-builtin">console</span>.<span class="hl-function">log</span>(el.<span class="hl-prop">dataset</span>.<span class="hl-prop">userId</span>);        <span class="hl-comment">// "42"</span>
<span class="hl-builtin">console</span>.<span class="hl-function">log</span>(el.<span class="hl-prop">dataset</span>.<span class="hl-prop">productName</span>);    <span class="hl-comment">// "Laptop"</span>
<span class="hl-builtin">console</span>.<span class="hl-function">log</span>(el.<span class="hl-prop">dataset</span>.<span class="hl-prop">inStock</span>);       <span class="hl-comment">// "true" (always a string)</span>

<span class="hl-comment">// Set new data attributes</span>
el.<span class="hl-prop">dataset</span>.<span class="hl-prop">status</span> = <span class="hl-string">"featured"</span>;

<span class="hl-comment">// Remove a data attribute</span>
<span class="hl-keyword">delete</span> el.<span class="hl-prop">dataset</span>.<span class="hl-prop">price</span>;
</div>

<h3>Using in CSS Selectors</h3>
<div class="lesson-code">
<span class="hl-comment">/* Style elements based on data values */</span>
<span class="hl-selector">[data-in-stock="true"]</span> {
  <span class="hl-prop">border</span>: <span class="hl-number">2px</span> <span class="hl-value">solid</span> <span class="hl-value">green</span>;
}

<span class="hl-selector">[data-in-stock="false"]</span> {
  <span class="hl-prop">opacity</span>: <span class="hl-number">0.5</span>;
}

<span class="hl-comment">/* Attribute substring match */</span>
<span class="hl-selector">[data-category^="tech"]</span> {
  <span class="hl-prop">background</span>: <span class="hl-value">lightblue</span>;
}
</div>

<h3>Practical Use Cases</h3>
<div class="lesson-code">
<span class="hl-comment">&lt;!-- Product cards --&gt;</span>
<span class="hl-tag">&lt;div</span> <span class="hl-attr">class</span>=<span class="hl-string">"product"</span> <span class="hl-attr">data-id</span>=<span class="hl-string">"7"</span> <span class="hl-attr">data-category</span>=<span class="hl-string">"electronics"</span><span class="hl-tag">&gt;</span>...<span class="hl-tag">&lt;/div&gt;</span>

<span class="hl-comment">&lt;!-- Tab system --&gt;</span>
<span class="hl-tag">&lt;button</span> <span class="hl-attr">data-tab</span>=<span class="hl-string">"profile"</span><span class="hl-tag">&gt;</span>Profile<span class="hl-tag">&lt;/button&gt;</span>
<span class="hl-tag">&lt;button</span> <span class="hl-attr">data-tab</span>=<span class="hl-string">"settings"</span><span class="hl-tag">&gt;</span>Settings<span class="hl-tag">&lt;/button&gt;</span>

<span class="hl-comment">&lt;!-- Modal triggers --&gt;</span>
<span class="hl-tag">&lt;button</span> <span class="hl-attr">data-modal</span>=<span class="hl-string">"signup"</span><span class="hl-tag">&gt;</span>Sign Up<span class="hl-tag">&lt;/button&gt;</span>
<span class="hl-tag">&lt;button</span> <span class="hl-attr">data-modal</span>=<span class="hl-string">"login"</span><span class="hl-tag">&gt;</span>Log In<span class="hl-tag">&lt;/button&gt;</span>
</div>

<h3>JavaScript with Data Attributes</h3>
<pre class="lesson-code" data-try="html">&lt;div id="output"&gt;&lt;/div&gt;

&lt;button data-action="greet" data-name="World"&gt;Say Hello&lt;/button&gt;
&lt;button data-action="greet" data-name="HTML"&gt;Say Hi&lt;/button&gt;

&lt;script&gt;
  document.querySelectorAll("[data-action='greet']")
    .forEach(btn => {
      btn.addEventListener("click", () => {
        const name = btn.dataset.name;
        document.getElementById("output").innerHTML =
          "&lt;p&gt;Hello, " + name + "!&lt;/p&gt;";
      });
    });
&lt;/script&gt;</pre>

<div class="lesson-tip">
  <strong>Tip:</strong> Use data attributes for data that the JavaScript needs to know about but that is not part of the content. For styling purposes, prefer CSS classes instead.
</div>
        `
      },
      {
        id: 21,
        title: 'HTML SEO & Meta Tags',
        desc: 'Optimizing HTML for search engines and social media.',
        content: `
<h2>HTML SEO &amp; Meta Tags</h2>
<p>Search Engine Optimization (SEO) in HTML is about structuring your markup so search engines can crawl, index, and rank your content effectively.</p>

<h3>Essential SEO Tags</h3>
<div class="lesson-code">
<span class="hl-tag">&lt;head&gt;</span>
  <span class="hl-comment">&lt;!-- Title: appears in search results (50-60 chars) --&gt;</span>
  <span class="hl-tag">&lt;title&gt;</span>Web Development Tutorial - Learn HTML &amp; CSS<span class="hl-tag">&lt;/title&gt;</span>

  <span class="hl-comment">&lt;!-- Meta description: shows under the title (150-160 chars) --&gt;</span>
  <span class="hl-tag">&lt;meta</span> <span class="hl-attr">name</span>=<span class="hl-string">"description"</span> <span class="hl-attr">content</span>=<span class="hl-string">"Learn web development step by step with interactive lessons, code examples, and hands-on practice."</span><span class="hl-tag">&gt;</span>

  <span class="hl-comment">&lt;!-- Canonical URL: prevents duplicate content --&gt;</span>
  <span class="hl-tag">&lt;link</span> <span class="hl-attr">rel</span>=<span class="hl-string">"canonical"</span> <span class="hl-attr">href</span>=<span class="hl-string">"https://example.com/tutorial"</span><span class="hl-tag">&gt;</span>

  <span class="hl-comment">&lt;!-- robots: tell search engines what to index --&gt;</span>
  <span class="hl-tag">&lt;meta</span> <span class="hl-attr">name</span>=<span class="hl-string">"robots"</span> <span class="hl-attr">content</span>=<span class="hl-string">"index, follow"</span><span class="hl-tag">&gt;</span>
<span class="hl-tag">&lt;/head&gt;</span>
</div>

<h3>Open Graph (Facebook, LinkedIn)</h3>
<div class="lesson-code">
<span class="hl-tag">&lt;meta</span> <span class="hl-attr">property</span>=<span class="hl-string">"og:type"</span> <span class="hl-attr">content</span>=<span class="hl-string">"website"</span><span class="hl-tag">&gt;</span>
<span class="hl-tag">&lt;meta</span> <span class="hl-attr">property</span>=<span class="hl-string">"og:title"</span> <span class="hl-attr">content</span>=<span class="hl-string">"My Amazing Article"</span><span class="hl-tag">&gt;</span>
<span class="hl-tag">&lt;meta</span> <span class="hl-attr">property</span>=<span class="hl-string">"og:description"</span> <span class="hl-attr">content</span>=<span class="hl-string">"A brief summary of the article."</span><span class="hl-tag">&gt;</span>
<span class="hl-tag">&lt;meta</span> <span class="hl-attr">property</span>=<span class="hl-string">"og:image"</span> <span class="hl-attr">content</span>=<span class="hl-string">"https://example.com/og-image.jpg"</span><span class="hl-tag">&gt;</span>
<span class="hl-tag">&lt;meta</span> <span class="hl-attr">property</span>=<span class="hl-string">"og:url"</span> <span class="hl-attr">content</span>=<span class="hl-string">"https://example.com/article"</span><span class="hl-tag">&gt;</span>
<span class="hl-tag">&lt;meta</span> <span class="hl-attr">property</span>=<span class="hl-string">"og:site_name"</span> <span class="hl-attr">content</span>=<span class="hl-string">"My Website"</span><span class="hl-tag">&gt;</span>
</div>

<h3>Twitter Cards</h3>
<div class="lesson-code">
<span class="hl-tag">&lt;meta</span> <span class="hl-attr">name</span>=<span class="hl-string">"twitter:card"</span> <span class="hl-attr">content</span>=<span class="hl-string">"summary_large_image"</span><span class="hl-tag">&gt;</span>
<span class="hl-tag">&lt;meta</span> <span class="hl-attr">name</span>=<span class="hl-string">"twitter:title"</span> <span class="hl-attr">content</span>=<span class="hl-string">"My Article Title"</span><span class="hl-tag">&gt;</span>
<span class="hl-tag">&lt;meta</span> <span class="hl-attr">name</span>=<span class="hl-string">"twitter:description"</span> <span class="hl-attr">content</span>=<span class="hl-string">"Short description."</span><span class="hl-tag">&gt;</span>
<span class="hl-tag">&lt;meta</span> <span class="hl-attr">name</span>=<span class="hl-string">"twitter:image"</span> <span class="hl-attr">content</span>=<span class="hl-string">"https://example.com/tw-image.jpg"</span><span class="hl-tag">&gt;</span>
</div>

<h3>Structured Data (JSON-LD)</h3>
<p>Helps search engines understand your content and show rich results like recipes, reviews, and events.</p>

<div class="lesson-code">
<span class="hl-tag">&lt;script</span> <span class="hl-attr">type</span>=<span class="hl-string">"application/ld+json"</span><span class="hl-tag">&gt;</span>
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Learn HTML",
  "author": { "@type": "Person", "name": "Jane Doe" },
  "datePublished": "2026-01-15",
  "image": "https://example.com/article-image.jpg"
}
<span class="hl-tag">&lt;/script&gt;</span>
</div>

<h3>SEO Semantic Markup</h3>
<ul>
  <li>Use exactly one <code>&lt;h1&gt;</code> per page</li>
  <li>Use headings in order: h1, h2, h3 (no skipping)</li>
  <li>Use <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> for emphasis</li>
  <li>Use descriptive <code>&lt;a&gt;</code> text, not "click here"</li>
  <li>Use <code>&lt;alt&gt;</code> text on all images</li>
  <li>Use <code>&lt;time&gt;</code> for dates</li>
</ul>

<div class="lesson-tip">
  <strong>Tip:</strong> Use the <a href="https://search.google.com/test/mobile-friendly" class="lesson-link">Google Mobile-Friendly Test</a> and <a href="https://search.google.com/structured-data/testing-tool" class="lesson-link">Rich Results Test</a> to validate your SEO markup.
</div>
        `
      },
      {
        id: 22,
        title: 'HTML Accessibility (a11y)',
        desc: 'Making your pages usable by everyone with ARIA and best practices.',
        content: `
<h2>HTML Accessibility (a11y)</h2>
<p>Web accessibility ensures that everyone, including people with disabilities, can use your website. HTML has many built-in accessibility features.</p>

<h3>ARIA Roles</h3>
<p>ARIA (Accessible Rich Internet Applications) attributes communicate role and state information to assistive technologies.</p>

<div class="lesson-code">
<span class="hl-comment">&lt;!-- Landmark roles --&gt;</span>
<span class="hl-tag">&lt;header</span> <span class="hl-attr">role</span>=<span class="hl-string">"banner"</span><span class="hl-tag">&gt;</span>...<span class="hl-tag">&lt;/header&gt;</span>
<span class="hl-tag">&lt;nav</span> <span class="hl-attr">role</span>=<span class="hl-string">"navigation"</span><span class="hl-tag">&gt;</span>...<span class="hl-tag">&lt;/nav&gt;</span>
<span class="hl-tag">&lt;main</span> <span class="hl-attr">role</span>=<span class="hl-string">"main"</span><span class="hl-tag">&gt;</span>...<span class="hl-tag">&lt;/main&gt;</span>
<span class="hl-tag">&lt;footer</span> <span class="hl-attr">role</span>=<span class="hl-string">"contentinfo"</span><span class="hl-tag">&gt;</span>...<span class="hl-tag">&lt;/footer&gt;</span>

<span class="hl-comment">&lt;!-- Note: semantic elements already have implicit roles,
     so &lt;nav&gt; is the same as role="navigation" --&gt;</span>
</div>

<h3>ARIA Labels</h3>
<div class="lesson-code">
<span class="hl-comment">&lt;!-- Label for elements without visible text --&gt;</span>
<span class="hl-tag">&lt;button</span> <span class="hl-attr">aria-label</span>=<span class="hl-string">"Close dialog"</span><span class="hl-tag">&gt;</span>&amp;times;<span class="hl-tag">&lt;/button&gt;</span>

<span class="hl-comment">&lt;!-- Label for form groups --&gt;</span>
<span class="hl-tag">&lt;fieldset</span> <span class="hl-attr">aria-labelledby</span>=<span class="hl-string">"legend1"</span><span class="hl-tag">&gt;</span>
  <span class="hl-tag">&lt;legend</span> <span class="hl-attr">id</span>=<span class="hl-string">"legend1"</span><span class="hl-tag">&gt;</span>Personal Info<span class="hl-tag">&lt;/legend&gt;</span>
  <span class="hl-tag">&lt;input</span> <span class="hl-attr">type</span>=<span class="hl-string">"text"</span> <span class="hl-attr">aria-describedby</span>=<span class="hl-string">"name-help"</span><span class="hl-tag">&gt;</span>
  <span class="hl-tag">&lt;span</span> <span class="hl-attr">id</span>=<span class="hl-string">"name-help"</span><span class="hl-tag">&gt;</span>Enter your full name.<span class="hl-tag">&lt;/span&gt;</span>
<span class="hl-tag">&lt;/fieldset&gt;</span>
</div>

<h3>Keyboard Navigation</h3>
<p>All interactive elements must be reachable and usable with keyboard only.</p>

<div class="lesson-code">
<span class="hl-comment">&lt;!-- Make custom elements focusable --&gt;</span>
<span class="hl-tag">&lt;div</span> <span class="hl-attr">role</span>=<span class="hl-string">"button"</span> <span class="hl-attr">tabindex</span>=<span class="hl-string">"0"</span>
     <span class="hl-attr">onkeydown</span>=<span class="hl-string">"if(event.key==='Enter') activate()"</span><span class="hl-tag">&gt;</span>
  Click or press Enter
<span class="hl-tag">&lt;/div&gt;</span>

<span class="hl-comment">&lt;!-- Skip navigation link --&gt;</span>
<span class="hl-tag">&lt;a</span> <span class="hl-attr">href</span>=<span class="hl-string">"#main-content"</span> <span class="hl-attr">class</span>=<span class="hl-string">"skip-link"</span><span class="hl-tag">&gt;</span>Skip to main content<span class="hl-tag">&lt;/a&gt;</span>
</div>

<h3>Alt Text for Images</h3>
<ul>
  <li><strong>Informative images:</strong> Describe what the image shows</li>
  <li><strong>Decorative images:</strong> Use <code>alt=""</code> (empty alt)</li>
  <li><strong>Complex images:</strong> Provide long description nearby</li>
</ul>

<div class="lesson-code">
<span class="hl-comment">&lt;!-- Good alt text --&gt;</span>
<span class="hl-tag">&lt;img</span> <span class="hl-attr">src</span>=<span class="hl-string">"chart.png"</span> <span class="hl-attr">alt</span>=<span class="hl-string">"Bar chart showing 40% sales increase in Q4"</span><span class="hl-tag">&gt;</span>

<span class="hl-comment">&lt;!-- Decorative image --&gt;</span>
<span class="hl-tag">&lt;img</span> <span class="hl-attr">src</span>=<span class="hl-string">"divider.png"</span> <span class="hl-attr">alt</span>=<span class="hl-string">""</span><span class="hl-tag">&gt;</span>
</div>

<h3>Color Contrast</h3>
<p>Text should have a contrast ratio of at least <strong>4.5:1</strong> against its background for normal text, and <strong>3:1</strong> for large text.</p>

<div class="lesson-tip">
  <strong>Tip:</strong> Test your pages with a screen reader (like NVDA on Windows or VoiceOver on Mac) and navigate using only the Tab key. If you can't use your site without a mouse, neither can many of your users.
</div>
        `
      },
      {
        id: 23,
        title: 'HTML Canvas Basics',
        desc: 'Drawing graphics and animations with the HTML Canvas API.',
        content: `
<h2>HTML Canvas Basics</h2>
<p>The <code>&lt;canvas&gt;</code> element provides a drawable region in HTML. You use JavaScript to draw shapes, text, images, and animations on it.</p>

<h3>Creating a Canvas</h3>
<div class="lesson-code">
<span class="hl-tag">&lt;canvas</span> <span class="hl-attr">id</span>=<span class="hl-string">"myCanvas"</span> <span class="hl-attr">width</span>=<span class="hl-string">"500"</span> <span class="hl-attr">height</span>=<span class="hl-string">"300"</span><span class="hl-tag">&gt;&lt;/canvas&gt;</span>

<span class="hl-tag">&lt;script&gt;</span>
  <span class="hl-keyword">const</span> canvas = <span class="hl-builtin">document</span>.<span class="hl-function">getElementById</span>(<span class="hl-string">"myCanvas"</span>);
  <span class="hl-keyword">const</span> ctx = canvas.<span class="hl-function">getContext</span>(<span class="hl-string">"2d"</span>);
<span class="hl-tag">&lt;/script&gt;</span>
</div>

<h3>Drawing Shapes</h3>
<div class="lesson-code">
<span class="hl-comment">// Rectangle</span>
ctx.<span class="hl-prop">fillStyle</span> = <span class="hl-string">"#4ecdc4"</span>;
ctx.<span class="hl-function">fillRect</span>(<span class="hl-number">10</span>, <span class="hl-number">10</span>, <span class="hl-number">150</span>, <span class="hl-number">100</span>);

<span class="hl-comment">// Outlined rectangle</span>
ctx.<span class="hl-prop">strokeStyle</span> = <span class="hl-string">"#333"</span>;
ctx.<span class="hl-prop">lineWidth</span> = <span class="hl-number">2</span>;
ctx.<span class="hl-function">strokeRect</span>(<span class="hl-number">200</span>, <span class="hl-number">10</span>, <span class="hl-number">150</span>, <span class="hl-number">100</span>);

<span class="hl-comment">// Circle</span>
ctx.<span class="hl-prop">beginPath</span>();
ctx.<span class="hl-function">arc</span>(<span class="hl-number">400</span>, <span class="hl-number">60</span>, <span class="hl-number">40</span>, <span class="hl-number">0</span>, Math.PI * <span class="hl-number">2</span>);
ctx.<span class="hl-prop">fillStyle</span> = <span class="hl-string">"#ff6b6b"</span>;
ctx.<span class="hl-function">fill</span>();
</div>

<h3>Drawing Paths</h3>
<div class="lesson-code">
<span class="hl-comment">// Triangle</span>
ctx.<span class="hl-function">beginPath</span>();
ctx.<span class="hl-function">moveTo</span>(<span class="hl-number">250</span>, <span class="hl-number">150</span>);
ctx.<span class="hl-function">lineTo</span>(<span class="hl-number">300</span>, <span class="hl-number">250</span>);
ctx.<span class="hl-function">lineTo</span>(<span class="hl-number">200</span>, <span class="hl-number">250</span>);
ctx.<span class="hl-function">closePath</span>();
ctx.<span class="hl-prop">fillStyle</span> = <span class="hl-string">"#764ba2"</span>;
ctx.<span class="hl-function">fill</span>();
</div>

<h3>Drawing Text</h3>
<div class="lesson-code">
ctx.<span class="hl-prop">font</span> = <span class="hl-string">"bold 32px Arial"</span>;
ctx.<span class="hl-prop">fillStyle</span> = <span class="hl-string">"#333"</span>;
ctx.<span class="hl-function">fillText</span>(<span class="hl-string">"Hello Canvas!"</span>, <span class="hl-number">50</span>, <span class="hl-number">280</span>);

ctx.<span class="hl-prop">font</span> = <span class="hl-string">"16px Arial"</span>;
ctx.<span class="hl-prop">strokeStyle</span> = <span class="hl-string">"#666"</span>;
ctx.<span class="hl-function">strokeText</span>(<span class="hl-string">"Outlined text"</span>, <span class="hl-number">50</span>, <span class="hl-number">290</span>);
</div>

<h3>Simple Animation</h3>
<pre class="lesson-code" data-try="html">&lt;canvas id="myCanvas" width="400" height="200"
        style="border:1px solid #ccc;"&gt;&lt;/canvas&gt;
&lt;script&gt;
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  let x = 50;
  let speed = 2;

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ff6b6b";
    ctx.beginPath();
    ctx.arc(x, 100, 25, 0, Math.PI * 2);
    ctx.fill();
    x += speed;
    if (x > 375 || x < 25) speed = -speed;
    requestAnimationFrame(animate);
  }
  animate();
&lt;/script&gt;</pre>

<div class="lesson-tip">
  <strong>Tip:</strong> Use <code>requestAnimationFrame()</code> for smooth animations instead of <code>setInterval()</code>. It syncs with the browser's refresh rate for optimal performance.
</div>
        `
      },
      {
        id: 24,
        title: 'HTML SVG Basics',
        desc: 'Creating scalable vector graphics inline in HTML.',
        content: `
<h2>HTML SVG Basics</h2>
<p>SVG (Scalable Vector Graphics) defines vector shapes using XML. Unlike Canvas, SVG elements are part of the DOM and can be styled and interacted with.</p>

<h3>Inline SVG</h3>
<div class="lesson-code">
<span class="hl-tag">&lt;svg</span> <span class="hl-attr">width</span>=<span class="hl-string">"200"</span> <span class="hl-attr">height</span>=<span class="hl-string">"200"</span> <span class="hl-attr">viewBox</span>=<span class="hl-string">"0 0 200 200"</span><span class="hl-tag">&gt;</span>
  <span class="hl-comment">&lt;!-- Circle --&gt;</span>
  <span class="hl-tag">&lt;circle</span> <span class="hl-attr">cx</span>=<span class="hl-string">"100"</span> <span class="hl-attr">cy</span>=<span class="hl-string">"100"</span> <span class="hl-attr">r</span>=<span class="hl-string">"80"</span>
    <span class="hl-attr">fill</span>=<span class="hl-string">"#4ecdc4"</span> <span class="hl-attr">stroke</span>=<span class="hl-string">"#333"</span> <span class="hl-attr">stroke-width</span>=<span class="hl-string">"2"</span><span class="hl-tag">/&gt;</span>

  <span class="hl-comment">&lt;!-- Text --&gt;</span>
  <span class="hl-tag">&lt;text</span> <span class="hl-attr">x</span>=<span class="hl-string">"100"</span> <span class="hl-attr">y</span>=<span class="hl-string">"105"</span> <span class="hl-attr">text-anchor</span>=<span class="hl-string">"middle"</span>
    <span class="hl-attr">fill</span>=<span class="hl-string">"white"</span> <span class="hl-attr">font-size</span>=<span class="hl-string">"20"</span><span class="hl-tag">&gt;</span>SVG<span class="hl-tag">&lt;/text&gt;</span>
<span class="hl-tag">&lt;/svg&gt;</span>
</div>

<h3>SVG Shapes</h3>
<div class="lesson-code">
<span class="hl-tag">&lt;svg</span> <span class="hl-attr">width</span>=<span class="hl-string">"400"</span> <span class="hl-attr">height</span>=<span class="hl-string">"200"</span><span class="hl-tag">&gt;</span>
  <span class="hl-comment">&lt;!-- Rectangle --&gt;</span>
  <span class="hl-tag">&lt;rect</span> <span class="hl-attr">x</span>=<span class="hl-string">"10"</span> <span class="hl-attr">y</span>=<span class="hl-string">"10"</span> <span class="hl-attr">width</span>=<span class="hl-string">"80"</span> <span class="hl-attr">height</span>=<span class="hl-string">"60"</span>
    <span class="hl-attr">fill</span>=<span class="hl-string">"#ff6b6b"</span> <span class="hl-attr">rx</span>=<span class="hl-string">"8"</span><span class="hl-tag">/&gt;</span>

  <span class="hl-comment">&lt;!-- Circle --&gt;</span>
  <span class="hl-tag">&lt;circle</span> <span class="hl-attr">cx</span>=<span class="hl-string">"150"</span> <span class="hl-attr">cy</span>=<span class="hl-string">"40"</span> <span class="hl-attr">r</span>=<span class="hl-string">"30"</span> <span class="hl-attr">fill</span>=<span class="hl-string">"#4ecdc4"</span><span class="hl-tag">/&gt;</span>

  <span class="hl-comment">&lt;!-- Ellipse --&gt;</span>
  <span class="hl-tag">&lt;ellipse</span> <span class="hl-attr">cx</span>=<span class="hl-string">"260"</span> <span class="hl-attr">cy</span>=<span class="hl-string">"40"</span> <span class="hl-attr">rx</span>=<span class="hl-string">"50"</span> <span class="hl-attr">ry</span>=<span class="hl-string">"25"</span> <span class="hl-attr">fill</span>=<span class="hl-string">"#764ba2"</span><span class="hl-tag">/&gt;</span>

  <span class="hl-comment">&lt;!-- Line --&gt;</span>
  <span class="hl-tag">&lt;line</span> <span class="hl-attr">x1</span>=<span class="hl-string">"10"</span> <span class="hl-attr">y1</span>=<span class="hl-string">"100"</span> <span class="hl-attr">x2</span>=<span class="hl-string">"350"</span> <span class="hl-attr">y2</span>=<span class="hl-string">"100"</span>
    <span class="hl-attr">stroke</span>=<span class="hl-string">"#333"</span> <span class="hl-attr">stroke-width</span>=<span class="hl-string">"2"</span><span class="hl-tag">/&gt;</span>

  <span class="hl-comment">&lt;!-- Polygon --&gt;</span>
  <span class="hl-tag">&lt;polygon</span> <span class="hl-attr">points</span>=<span class="hl-string">"200,130 230,200 170,200"</span> <span class="hl-attr">fill</span>=<span class="hl-string">"#ffc107"</span><span class="hl-tag">/&gt;</span>
<span class="hl-tag">&lt;/svg&gt;</span>
</div>

<h3>Styling SVG with CSS</h3>
<div class="lesson-code">
<span class="hl-tag">&lt;style&gt;</span>
  <span class="hl-selector">svg circle</span> {
    <span class="hl-prop">transition</span>: <span class="hl-value">fill 0.3s ease</span>;
    <span class="hl-prop">cursor</span>: <span class="hl-value">pointer</span>;
  }
  <span class="hl-selector">svg circle:hover</span> {
    <span class="hl-prop">fill</span>: <span class="hl-value">#ff6b6b</span>;
  }
<span class="hl-tag">&lt;/style&gt;</span>
</div>

<h3>SVG vs Canvas</h3>
<table>
  <tr><th>Feature</th><th>SVG</th><th>Canvas</th></tr>
  <tr><td>Resolution</td><td>Scalable (vector)</td><td>Pixel-based (raster)</td></tr>
  <tr><td>DOM</td><td>Yes (each shape is an element)</td><td>No (single element)</td></tr>
  <tr><td>Events</td><td>Per-shape events</td><td>Manual hit detection</td></tr>
  <tr><td>Best for</td><td>Icons, logos, charts, UI</td><td>Games, photo editing, complex animations</td></tr>
</table>

<div class="lesson-tip">
  <strong>Tip:</strong> Use SVG for icons, logos, illustrations, and UI elements. Use Canvas for games, complex particle systems, and pixel-level image manipulation.
</div>
        `
      },
      {
        id: 25,
        title: 'HTML Email Templates',
        desc: 'Building email-compatible HTML with table-based layouts.',
        content: `
<h2>HTML Email Templates</h2>
<p>Email HTML is more restrictive than web HTML. Most email clients have limited CSS support, so table-based layouts and inline styles are the standard.</p>

<h3>Why Email HTML is Different</h3>
<ul>
  <li>Most email clients strip <code>&lt;style&gt;</code> blocks and <code>&lt;link&gt;</code> tags</li>
  <li>Flexbox and Grid are not supported</li>
  <li>External stylesheets are not loaded</li>
  <li>JavaScript is completely blocked</li>
  <li>Some clients strip the <code>&lt;head&gt;</code> entirely</li>
</ul>

<h3>Basic Email Structure</h3>
<div class="lesson-code">
<span class="hl-tag">&lt;table</span> <span class="hl-attr">role</span>=<span class="hl-string">"presentation"</span> <span class="hl-attr">width</span>=<span class="hl-string">"100%"</span> <span class="hl-attr">cellpadding</span>=<span class="hl-string">"0"</span> <span class="hl-attr">cellspacing</span>=<span class="hl-string">"0"</span><span class="hl-tag">&gt;</span>
  <span class="hl-tag">&lt;tr&gt;</span>
    <span class="hl-tag">&lt;td</span> <span class="hl-attr">align</span>=<span class="hl-string">"center"</span><span class="hl-tag">&gt;</span>
      <span class="hl-tag">&lt;table</span> <span class="hl-attr">width</span>=<span class="hl-string">"600"</span> <span class="hl-attr">cellpadding</span>=<span class="hl-string">"20"</span><span class="hl-tag">&gt;</span>
        <span class="hl-tag">&lt;tr&gt;</span>
          <span class="hl-tag">&lt;td</span> <span class="hl-attr">style</span>=<span class="hl-string">"font-family:Arial,sans-serif;color:#333;"</span><span class="hl-tag">&gt;</span>
            <span class="hl-tag">&lt;h1&gt;</span>Welcome!<span class="hl-tag">&lt;/h1&gt;</span>
            <span class="hl-tag">&lt;p&gt;</span>Thank you for signing up.<span class="hl-tag">&lt;/p&gt;</span>
          <span class="hl-tag">&lt;/td&gt;</span>
        <span class="hl-tag">&lt;/tr&gt;</span>
      <span class="hl-tag">&lt;/table&gt;</span>
    <span class="hl-tag">&lt;/td&gt;</span>
  <span class="hl-tag">&lt;/tr&gt;</span>
<span class="hl-tag">&lt;/table&gt;</span>
</div>

<h3>Key Rules for Email HTML</h3>
<table>
  <tr><th>Rule</th><th>Why</th></tr>
  <tr><td>Use tables for layout</td><td>Flexbox/Grid have no support</td></tr>
  <tr><td>Inline all styles</td><td>&lt;style&gt; tags are stripped</td></tr>
  <tr><td>Use web-safe fonts</td><td>Custom fonts often fail</td></tr>
  <tr><td>Set width to 600px</td><td>Standard email width</td></tr>
  <tr><td>Use role="presentation"</td><td>Helps screen readers skip layout tables</td></tr>
  <tr><td>Include text version</td><td>Some clients block HTML</td></tr>
</table>

<h3>Responsive Email</h3>
<div class="lesson-code">
<span class="hl-tag">&lt;style&gt;</span>
  <span class="hl-comment">/* Only works in clients that support &lt;style&gt; */</span>
  <span class="hl-keyword">@media</span> (<span class="hl-prop">max-width</span>: <span class="hl-number">600px</span>) {
    <span class="hl-selector">.email-content</span> { <span class="hl-prop">width</span>: <span class="hl-number">100%</span> !important; }
    <span class="hl-selector">.mobile-pad</span>   { <span class="hl-prop">padding</span>: <span class="hl-number">10px</span> !important; }
  }
<span class="hl-tag">&lt;/style&gt;</span>
</div>

<h3>Email Best Practices</h3>
<ul>
  <li><strong>Preheader text:</strong> Add a hidden text preview after the opening <code>&lt;body&gt;</code></li>
  <li><strong>Image alt text:</strong> Many clients block images by default</li>
  <li><strong>CTA buttons:</strong> Use bulletproof buttons with VML for Outlook</li>
  <li><strong>Test widely:</strong> Use Litmus or Email on Acid to test across clients</li>
  <li><strong>Unsubscribe link:</strong> Required by law (CAN-SPAM, GDPR)</li>
</ul>

<div class="lesson-tip">
  <strong>Tip:</strong> Use email-specific tools like MJML or Foundation for Emails to write responsive email templates without dealing with raw HTML table structures.
</div>
        `
      }
    ]
  },
  css: {
    title: 'CSS',
    icon: '#2965f1',
    lessons: [
      {
        id: 1,
        title: 'Introduction to CSS',
        desc: 'What CSS is and how to style your first elements.',
        content: `
<h2>What is CSS?</h2>
<p>CSS (Cascading Style Sheets) is the language used to style HTML elements. It controls colors, fonts, spacing, layout, and more.</p>

<h3>How CSS Works</h3>
<p>CSS works by selecting HTML elements and applying styles to them. A CSS rule consists of a <strong>selector</strong> and a <strong>declaration block</strong>.</p>

<div class="lesson-code">
<span class="hl-selector">selector</span> {
  <span class="hl-prop">property</span>: <span class="hl-value">value</span>;
  <span class="hl-prop">property</span>: <span class="hl-value">value</span>;
}
</div>

<h3>Three Ways to Add CSS</h3>
<h4>1. Inline CSS</h4>
<p>Applied directly to an element using the <code>style</code> attribute.</p>
<div class="lesson-code">
<span class="hl-tag">&lt;p</span> <span class="hl-attr">style</span>=<span class="hl-string">"color: blue; font-size: 18px;"</span><span class="hl-tag">&gt;</span>Blue text<span class="hl-tag">&lt;/p&gt;</span>
</div>

<h4>2. Internal CSS</h4>
<p>Placed inside a <code>&lt;style&gt;</code> tag in the <code>&lt;head&gt;</code> section.</p>
<div class="lesson-code">
<span class="hl-tag">&lt;head&gt;</span>
  <span class="hl-tag">&lt;style&gt;</span>
    <span class="hl-selector">p</span> {
      <span class="hl-prop">color</span>: <span class="hl-value">blue</span>;
      <span class="hl-prop">font-size</span>: <span class="hl-number">18px</span>;
    }
  <span class="hl-tag">&lt;/style&gt;</span>
<span class="hl-tag">&lt;/head&gt;</span>
</div>

<h4>3. External CSS (Recommended)</h4>
<p>CSS is written in a separate <code>.css</code> file and linked via <code>&lt;link&gt;</code>.</p>
<div class="lesson-code">
<span class="hl-comment">&lt;!-- In your HTML head --&gt;</span>
<span class="hl-tag">&lt;link</span> <span class="hl-attr">rel</span>=<span class="hl-string">"stylesheet"</span> <span class="hl-attr">href</span>=<span class="hl-string">"styles.css"</span><span class="hl-tag">&gt;</span>
</div>

<h3>Your First CSS</h3>
<pre class="lesson-code" data-try="html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;style&gt;
    h1 { color: red; text-align: center; }
    p { font-size: 18px; }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Hello, CSS!&lt;/h1&gt;
  &lt;p&gt;This text is styled with CSS.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<span class="hl-comment">/* Style paragraphs */</span>
<span class="hl-selector">p</span> {
  <span class="hl-prop">font-size</span>: <span class="hl-number">16px</span>;
  <span class="hl-prop">line-height</span>: <span class="hl-number">1.6</span>;
}
</div>

<h3>CSS Comments</h3>
<p>Use <code>/* comment */</code> to add notes in your CSS. Comments are ignored by browsers.</p>

<div class="lesson-tip">
  <strong>Tip:</strong> External CSS is the best practice because it separates content (HTML) from presentation (CSS) and can be reused across multiple pages.
</div>
        `
      },
      {
        id: 2,
        title: 'Selectors & Colors',
        desc: 'Targeting elements with selectors and using colors.',
        content: `
<h2>Selectors & Colors</h2>
<p>Selectors are patterns used to target specific HTML elements. Colors bring your designs to life.</p>

<h3>Basic Selectors</h3>
<div class="lesson-code">
<span class="hl-comment">/* Element selector */</span>
<span class="hl-selector">h1</span> { <span class="hl-prop">color</span>: <span class="hl-value">navy</span>; }

<span class="hl-comment">/* Class selector */</span>
<span class="hl-selector">.highlight</span> { <span class="hl-prop">background</span>: <span class="hl-value">yellow</span>; }

<span class="hl-comment">/* ID selector */</span>
<span class="hl-selector">#header</span> { <span class="hl-prop">height</span>: <span class="hl-number">80px</span>; }

<span class="hl-comment">/* Universal selector */</span>
<span class="hl-selector">*</span> { <span class="hl-prop">margin</span>: <span class="hl-number">0</span>; }
</div>

<h3>Combined Selectors</h3>
<div class="lesson-code">
<span class="hl-comment">/* Descendant: all p inside .card */</span>
<span class="hl-selector">.card p</span> { ... }

<span class="hl-comment">/* Child: direct children only */</span>
<span class="hl-selector">.card &gt; p</span> { ... }

<span class="hl-comment">/* Adjacent sibling: p immediately after h2 */</span>
<span class="hl-selector">h2 + p</span> { ... }

<span class="hl-comment">/* Multiple selectors */</span>
<span class="hl-selector">h1, h2, h3</span> { ... }
</div>

<h3>Colors in CSS</h3>
<h4>Named Colors</h4>
<p>CSS supports 140+ named colors: <code>red</code>, <code>blue</code>, <code>tomato</code>, <code>rebeccapurple</code>, etc.</p>

<h4>Hex Colors</h4>
<p>A six-digit code starting with <code>#</code>: <code>#ff0000</code> (red), <code>#00ff00</code> (green), <code>#0000ff</code> (blue).</p>

<h4>RGB / RGBA</h4>
<div class="lesson-code">
<span class="hl-selector">.box</span> {
  <span class="hl-prop">color</span>: <span class="hl-value">rgb(255, 0, 0)</span>;       <span class="hl-comment">/* red */</span>
  <span class="hl-prop">background</span>: <span class="hl-value">rgba(0, 0, 0, 0.5)</span>;  <span class="hl-comment">/* 50% black */</span>
}
</div>

<h4>HSL / HSLA</h4>
<p>HSL stands for Hue, Saturation, Lightness. Often more intuitive than RGB.</p>
<div class="lesson-code">
<span class="hl-selector">.box</span> {
  <span class="hl-prop">color</span>: <span class="hl-value">hsl(0, 100%, 50%)</span>;      <span class="hl-comment">/* red */</span>
  <span class="hl-prop">background</span>: <span class="hl-value">hsla(200, 80%, 50%, 0.3)</span>;
}
</div>

<h3>Background vs Text Color</h3>
<div class="lesson-code">
<span class="hl-selector">.card</span> {
  <span class="hl-prop">color</span>: <span class="hl-value">#333</span>;               <span class="hl-comment">/* text color */</span>
  <span class="hl-prop">background-color</span>: <span class="hl-value">#f0f0f0</span>;  <span class="hl-comment">/* background */</span>
}
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Use online tools like Adobe Color or Coolors to find beautiful color palettes. Stick to 2-3 primary colors for a cohesive design.
</div>
        `
      },
      {
        id: 3,
        title: 'Box Model & Spacing',
        desc: 'Understanding margins, padding, and borders.',
        content: `
<h2>Box Model & Spacing</h2>
<p>Every HTML element is a rectangular box. The CSS Box Model defines how spacing and sizing work.</p>

<h3>The Box Model</h3>
<div class="lesson-diagram" style="flex-direction:column;align-items:center;">
  <div style="background:rgba(217,217,217,0.1);border:1px dashed var(--text-muted);padding:32px;border-radius:8px;font-size:12px;text-align:center;">
    <div style="color:var(--text-sec);margin-bottom:4px;">Margin</div>
    <div style="background:rgba(217,217,217,0.15);border:1px dashed var(--text-muted);padding:24px;border-radius:6px;">
      <div style="color:var(--text-sec);margin-bottom:4px;">Border</div>
      <div style="background:rgba(217,217,217,0.2);border:1px dashed var(--text-muted);padding:20px;border-radius:4px;">
        <div style="color:var(--text-sec);margin-bottom:4px;">Padding</div>
        <div style="background:rgba(217,217,217,0.08);padding:16px;border-radius:3px;">
          <strong>Content</strong>
        </div>
      </div>
    </div>
  </div>
</div>

<h3>Margin</h3>
<p>Space <strong>outside</strong> the element, pushing other elements away.</p>
<div class="lesson-code">
<span class="hl-selector">.card</span> {
  <span class="hl-prop">margin</span>: <span class="hl-number">20px</span>;          <span class="hl-comment">/* all sides */</span>
  <span class="hl-prop">margin</span>: <span class="hl-number">10px 20px</span>;    <span class="hl-comment">/* top/bottom left/right */</span>
  <span class="hl-prop">margin</span>: <span class="hl-number">10px 20px 30px 40px</span>;  <span class="hl-comment">/* top right bottom left */</span>
}
</div>

<h3>Padding</h3>
<p>Space <strong>inside</strong> the element, between content and border.</p>
<div class="lesson-code">
<span class="hl-selector">.card</span> {
  <span class="hl-prop">padding</span>: <span class="hl-number">16px</span>;
  <span class="hl-prop">padding</span>: <span class="hl-number">12px 24px</span>;
}
</div>

<h3>Border</h3>
<p>A line around the element, between margin and padding.</p>
<div class="lesson-code">
<span class="hl-selector">.card</span> {
  <span class="hl-prop">border</span>: <span class="hl-number">2px</span> <span class="hl-value">solid</span> <span class="hl-value">#333</span>;
  <span class="hl-prop">border-radius</span>: <span class="hl-number">8px</span>;  <span class="hl-comment">/* Rounded corners */</span>
}
</div>

<h3>box-sizing</h3>
<p>The <code>box-sizing</code> property changes how width/height are calculated.</p>
<ul>
  <li><strong>content-box</strong> (default): width applies only to content area</li>
  <li><strong>border-box</strong>: width includes padding and border (recommended)</li>
</ul>

<div class="lesson-code">
<span class="hl-comment">/* Reset for all elements */</span>
<span class="hl-selector">*</span> {
  <span class="hl-prop">box-sizing</span>: <span class="hl-value">border-box</span>;
}
</div>

<h3>Margin Collapse</h3>
<p>Vertical margins between adjacent elements collapse into the larger of the two. Horizontal margins do not collapse.</p>

<div class="lesson-tip">
  <strong>Tip:</strong> Always set <code>box-sizing: border-box</code> on all elements  -  it makes sizing much more predictable.
</div>
        `
      },
      {
        id: 4,
        title: 'Flexbox',
        desc: 'Modern one-dimensional layout system.',
        content: `
<h2>Flexbox</h2>
<p>Flexbox is a one-dimensional layout system that makes it easy to align and distribute items within a container.</p>

<h3>Setting Up Flexbox</h3>
<div class="lesson-code">
<span class="hl-selector">.container</span> {
  <span class="hl-prop">display</span>: <span class="hl-value">flex</span>;
}
</div>

<h3>Main Axis vs Cross Axis</h3>
<ul>
  <li><strong>Main axis:</strong> horizontal by default (flex-direction: row)</li>
  <li><strong>Cross axis:</strong> vertical (perpendicular to main axis)</li>
</ul>

<h3>Flex Direction</h3>
<div class="lesson-code">
<span class="hl-selector">.container</span> {
  <span class="hl-prop">flex-direction</span>: <span class="hl-value">row</span>;         <span class="hl-comment">/* default: left to right */</span>
  <span class="hl-prop">flex-direction</span>: <span class="hl-value">column</span>;      <span class="hl-comment">/* top to bottom */</span>
  <span class="hl-prop">flex-direction</span>: <span class="hl-value">row-reverse</span>;  <span class="hl-comment">/* right to left */</span>
}
</div>

<h3>Justify Content (Main Axis)</h3>
<div class="lesson-code">
<span class="hl-selector">.container</span> {
  <span class="hl-prop">justify-content</span>: <span class="hl-value">center</span>;       <span class="hl-comment">/* center items */</span>
  <span class="hl-prop">justify-content</span>: <span class="hl-value">space-between</span>; <span class="hl-comment">/* equal space between */</span>
  <span class="hl-prop">justify-content</span>: <span class="hl-value">space-around</span>;  <span class="hl-comment">/* space around each item */</span>
  <span class="hl-prop">justify-content</span>: <span class="hl-value">flex-end</span>;     <span class="hl-comment">/* align to end */</span>
}
</div>

<h3>Align Items (Cross Axis)</h3>
<div class="lesson-code">
<span class="hl-selector">.container</span> {
  <span class="hl-prop">align-items</span>: <span class="hl-value">center</span>;     <span class="hl-comment">/* vertically center */</span>
  <span class="hl-prop">align-items</span>: <span class="hl-value">stretch</span>;    <span class="hl-comment">/* stretch to fill height */</span>
  <span class="hl-prop">align-items</span>: <span class="hl-value">flex-start</span>; <span class="hl-comment">/* align to top */</span>
  <span class="hl-prop">align-items</span>: <span class="hl-value">flex-end</span>;   <span class="hl-comment">/* align to bottom */</span>
}
</div>

<h3>Centering with Flexbox</h3>
<p>The most common flexbox use case: perfectly center an element both horizontally and vertically.</p>
<div class="lesson-code">
<span class="hl-selector">.container</span> {
  <span class="hl-prop">display</span>: <span class="hl-value">flex</span>;
  <span class="hl-prop">justify-content</span>: <span class="hl-value">center</span>;
  <span class="hl-prop">align-items</span>: <span class="hl-value">center</span>;
  <span class="hl-prop">height</span>: <span class="hl-number">100vh</span>;  <span class="hl-comment">/* full viewport height */</span>
}
</div>

<h3>Flex Wrap</h3>
<p>Control whether items wrap to a new line when they overflow.</p>
<div class="lesson-code">
<span class="hl-selector">.container</span> {
  <span class="hl-prop">flex-wrap</span>: <span class="hl-value">wrap</span>;      <span class="hl-comment">/* allow wrapping */</span>
  <span class="hl-prop">flex-wrap</span>: <span class="hl-value">nowrap</span>;    <span class="hl-comment">/* default: no wrap */</span>
}
</div>

<h3>Gap</h3>
<p>Add spacing between flex items without using margins.</p>
<div class="lesson-code">
<span class="hl-selector">.container</span> {
  <span class="hl-prop">display</span>: <span class="hl-value">flex</span>;
  <span class="hl-prop">gap</span>: <span class="hl-number">16px</span>;  <span class="hl-comment">/* space between items */</span>
}
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Flexbox is perfect for navigation bars, card layouts, centering content, and arranging items in a row or column.
</div>
        `
      },
      {
        id: 5,
        title: 'CSS Grid',
        desc: 'Two-dimensional layout for complex designs.',
        content: `
<h2>CSS Grid</h2>
<p>CSS Grid is a two-dimensional layout system that handles both rows and columns simultaneously  -  perfect for complex page layouts.</p>

<h3>Setting Up Grid</h3>
<div class="lesson-code">
<span class="hl-selector">.container</span> {
  <span class="hl-prop">display</span>: <span class="hl-value">grid</span>;
  <span class="hl-prop">grid-template-columns</span>: <span class="hl-value">repeat(3, 1fr)</span>;
  <span class="hl-prop">gap</span>: <span class="hl-number">16px</span>;
}
</div>

<h3>Grid Template Columns</h3>
<div class="lesson-code">
<span class="hl-comment">/* Three equal columns */</span>
<span class="hl-prop">grid-template-columns</span>: <span class="hl-number">1fr 1fr 1fr</span>;

<span class="hl-comment">/* Fixed + flexible */</span>
<span class="hl-prop">grid-template-columns</span>: <span class="hl-number">250px 1fr</span>;

<span class="hl-comment">/* Repeat function */</span>
<span class="hl-prop">grid-template-columns</span>: <span class="hl-value">repeat(4, 1fr)</span>;

<span class="hl-comment">/* Mix of sizes */</span>
<span class="hl-prop">grid-template-columns</span>: <span class="hl-number">200px</span> <span class="hl-number">1fr</span> <span class="hl-number">200px</span>;
</div>

<h3>Grid Template Rows</h3>
<div class="lesson-code">
<span class="hl-selector">.container</span> {
  <span class="hl-prop">grid-template-rows</span>: <span class="hl-number">100px 1fr 80px</span>;
}
</div>

<h3>Grid Areas</h3>
<p>Name specific areas in your grid for cleaner layouts.</p>
<div class="lesson-code">
<span class="hl-selector">.container</span> {
  <span class="hl-prop">display</span>: <span class="hl-value">grid</span>;
  <span class="hl-prop">grid-template-areas</span>:
    <span class="hl-string">"header header"</span>
    <span class="hl-string">"sidebar main"</span>
    <span class="hl-string">"footer footer"</span>;
  <span class="hl-prop">grid-template-columns</span>: <span class="hl-number">250px 1fr</span>;
  <span class="hl-prop">grid-template-rows</span>: <span class="hl-number">80px 1fr 60px</span>;
  <span class="hl-prop">gap</span>: <span class="hl-number">12px</span>;
}

<span class="hl-selector">.header</span> { <span class="hl-prop">grid-area</span>: <span class="hl-value">header</span>; }
<span class="hl-selector">.sidebar</span> { <span class="hl-prop">grid-area</span>: <span class="hl-value">sidebar</span>; }
</div>

<h3>Grid vs Flexbox</h3>
<ul>
  <li><strong>Flexbox:</strong> One-dimensional (row OR column). Great for components and small layouts.</li>
  <li><strong>Grid:</strong> Two-dimensional (rows AND columns). Great for full page layouts and complex designs.</li>
</ul>

<h3>Responsive Grid without Media Queries</h3>
<p>Use <code>auto-fill</code> or <code>auto-fit</code> with <code>minmax</code> for responsive layouts.</p>
<div class="lesson-code">
<span class="hl-selector">.card-grid</span> {
  <span class="hl-prop">display</span>: <span class="hl-value">grid</span>;
  <span class="hl-prop">grid-template-columns</span>: <span class="hl-value">repeat(auto-fill, minmax(300px, 1fr))</span>;
  <span class="hl-prop">gap</span>: <span class="hl-number">20px</span>;
}
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Use Grid for page-level layouts and Flexbox for component-level layouts. They work great together!
</div>
        `
      },
      {
        id: 6,
        title: 'Typography & Fonts',
        desc: 'Styling text with fonts, sizes, and spacing.',
        content: `
<h2>Typography & Fonts</h2>
<p>Typography is a crucial part of web design. Good typography improves readability and establishes visual hierarchy.</p>

<h3>Font Family</h3>
<p>Specify the font for an element. Always include fallback fonts.</p>
<div class="lesson-code">
<span class="hl-selector">body</span> {
  <span class="hl-prop">font-family</span>: <span class="hl-value">"Inter", "Segoe UI", system-ui, sans-serif</span>;
}
</div>

<h3>Font Size</h3>
<div class="lesson-code">
<span class="hl-selector">h1</span> { <span class="hl-prop">font-size</span>: <span class="hl-number">32px</span>; }
<span class="hl-selector">h2</span> { <span class="hl-prop">font-size</span>: <span class="hl-number">24px</span>; }
<span class="hl-selector">p</span>  { <span class="hl-prop">font-size</span>: <span class="hl-number">16px</span>; }
</div>

<h3>Font Weight</h3>
<div class="lesson-code">
<span class="hl-selector">h1</span> { <span class="hl-prop">font-weight</span>: <span class="hl-number">700</span>; }  <span class="hl-comment">/* bold */</span>
<span class="hl-selector">p</span>  { <span class="hl-prop">font-weight</span>: <span class="hl-number">400</span>; }  <span class="hl-comment">/* normal */</span>
</div>

<h3>Line Height</h3>
<p>Controls the vertical space between lines of text. A value of 1.5-1.7 is standard for body text.</p>
<div class="lesson-code">
<span class="hl-selector">p</span> {
  <span class="hl-prop">line-height</span>: <span class="hl-number">1.6</span>;
}
</div>

<h3>Text Alignment</h3>
<div class="lesson-code">
<span class="hl-selector">.center</span> { <span class="hl-prop">text-align</span>: <span class="hl-value">center</span>; }
<span class="hl-selector">.left</span>   { <span class="hl-prop">text-align</span>: <span class="hl-value">left</span>; }
<span class="hl-selector">.right</span>  { <span class="hl-prop">text-align</span>: <span class="hl-value">right</span>; }
</div>

<h3>Text Decoration</h3>
<div class="lesson-code">
<span class="hl-selector">a</span>       { <span class="hl-prop">text-decoration</span>: <span class="hl-value">none</span>; }    <span class="hl-comment">/* Remove underline from links */</span>
<span class="hl-selector">.strike</span>  { <span class="hl-prop">text-decoration</span>: <span class="hl-value">line-through</span>; }
</div>

<h3>Letter Spacing</h3>
<p>Useful for uppercase headings and brand text.</p>
<div class="lesson-code">
<span class="hl-selector">h1</span> {
  <span class="hl-prop">letter-spacing</span>: <span class="hl-number">1px</span>;
  <span class="hl-prop">text-transform</span>: <span class="hl-value">uppercase</span>;
}
</div>

<h3>Google Fonts</h3>
<p>To use Google Fonts, add a link in your HTML head, then reference it in CSS.</p>
<div class="lesson-code">
<span class="hl-comment">&lt;!-- In HTML head --&gt;</span>
<span class="hl-tag">&lt;link</span> <span class="hl-attr">href</span>=<span class="hl-string">"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"</span> <span class="hl-attr">rel</span>=<span class="hl-string">"stylesheet"</span><span class="hl-tag">&gt;</span>

<span class="hl-comment">/* In CSS */</span>
<span class="hl-selector">body</span> {
  <span class="hl-prop">font-family</span>: <span class="hl-value">"Roboto", sans-serif</span>;
}
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Use a type scale for consistent sizing. A common scale: 16px (body), 20px (h4), 24px (h3), 28px (h2), 36px (h1).
</div>
        `
      },
      {
        id: 7,
        title: 'Animations & Transitions',
        desc: 'Adding motion and interactivity with CSS.',
        content: `
<h2>Animations & Transitions</h2>
<p>CSS animations and transitions bring your pages to life with smooth motion and interactive feedback.</p>

<h3>Transitions</h3>
<p>Transitions smoothly change property values over a specified duration.</p>
<div class="lesson-code">
<span class="hl-selector">.button</span> {
  <span class="hl-prop">background</span>: <span class="hl-value">#333</span>;
  <span class="hl-prop">color</span>: <span class="hl-value">white</span>;
  <span class="hl-prop">transition</span>: <span class="hl-value">background 0.3s ease</span>;
}

<span class="hl-selector">.button:hover</span> {
  <span class="hl-prop">background</span>: <span class="hl-value">#555</span>;
}
</div>

<h3>Transition Properties</h3>
<div class="lesson-code">
<span class="hl-comment">/* Specific property */</span>
<span class="hl-prop">transition</span>: <span class="hl-value">opacity 0.3s</span>;

<span class="hl-comment">/* Multiple properties */</span>
<span class="hl-prop">transition</span>: <span class="hl-value">transform 0.2s, background 0.3s</span>;

<span class="hl-comment">/* All properties */</span>
<span class="hl-prop">transition</span>: <span class="hl-value">all 0.3s ease</span>;

<span class="hl-comment">/* With delay */</span>
<span class="hl-prop">transition</span>: <span class="hl-value">transform 0.3s ease 0.1s</span>;
</div>

<h3>Transition Timing Functions</h3>
<ul>
  <li><strong>ease</strong>  -  slow start, fast middle, slow end (default)</li>
  <li><strong>linear</strong>  -  constant speed</li>
  <li><strong>ease-in</strong>  -  slow start, fast end</li>
  <li><strong>ease-out</strong>  -  fast start, slow end</li>
  <li><strong>ease-in-out</strong>  -  slow start and end</li>
</ul>

<h3>Keyframe Animations</h3>
<p>For more complex animations, use <code>@keyframes</code>.</p>
<div class="lesson-code">
<span class="hl-keyframe">@keyframes</span> <span class="hl-function">fadeIn</span> {
  <span class="hl-keyword">from</span> {
    <span class="hl-prop">opacity</span>: <span class="hl-number">0</span>;
    <span class="hl-prop">transform</span>: <span class="hl-value">translateY(20px)</span>;
  }
  <span class="hl-keyword">to</span> {
    <span class="hl-prop">opacity</span>: <span class="hl-number">1</span>;
    <span class="hl-prop">transform</span>: <span class="hl-value">translateY(0)</span>;
  }
}

<span class="hl-selector">.box</span> {
  <span class="hl-prop">animation</span>: <span class="hl-value">fadeIn 0.6s ease-out</span>;
}
</div>

<h3>Animation Properties</h3>
<div class="lesson-code">
<span class="hl-selector">.element</span> {
  <span class="hl-prop">animation-name</span>: <span class="hl-value">slideIn</span>;
  <span class="hl-prop">animation-duration</span>: <span class="hl-number">0.5s</span>;
  <span class="hl-prop">animation-timing-function</span>: <span class="hl-value">ease</span>;
  <span class="hl-prop">animation-delay</span>: <span class="hl-number">0.2s</span>;
  <span class="hl-prop">animation-iteration-count</span>: <span class="hl-value">infinite</span>;  <span class="hl-comment">/* repeat forever */</span>
  <span class="hl-prop">animation-direction</span>: <span class="hl-value">alternate</span>;  <span class="hl-comment">/* back and forth */</span>
}
</div>

<h3>Transform</h3>
<p>The <code>transform</code> property modifies the appearance of an element without affecting layout.</p>
<div class="lesson-code">
<span class="hl-selector">.box:hover</span> {
  <span class="hl-prop">transform</span>: <span class="hl-value">scale(1.1)</span>;              <span class="hl-comment">/* grow */</span>
  <span class="hl-prop">transform</span>: <span class="hl-value">rotate(45deg)</span>;          <span class="hl-comment">/* rotate */</span>
  <span class="hl-prop">transform</span>: <span class="hl-value">translateX(20px)</span>;       <span class="hl-comment">/* move right */</span>
  <span class="hl-prop">transform</span>: <span class="hl-value">translateY(-10px)</span>;      <span class="hl-comment">/* move up */</span>
}
</div>

<h3>Hover Card Example</h3>
<div class="lesson-code">
<span class="hl-selector">.card</span> {
  <span class="hl-prop">transition</span>: <span class="hl-value">transform 0.2s ease, box-shadow 0.2s ease</span>;
}

<span class="hl-selector">.card:hover</span> {
  <span class="hl-prop">transform</span>: <span class="hl-value">translateY(-4px)</span>;
  <span class="hl-prop">box-shadow</span>: <span class="hl-value">0 8px 24px rgba(0,0,0,0.3)</span>;
}
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Prefer <code>transform</code> and <code>opacity</code> for animations  -  they are GPU-accelerated and perform better than animating properties like <code>width</code> or <code>height</code>.
</div>
        `
      }
    ,
      {
        id: 8,
        title: 'Display Property',
        desc: 'Controlling how elements are displayed and laid out.',
        content: `
<h2>Display Property</h2>
<p>The <code>display</code> property determines how an element is rendered in the page layout.</p>

<h3>Common Display Values</h3>
<div class="lesson-code">
<span class="hl-comment">/* Block: full width, new line */</span>
<span class="hl-selector">.block-element</span> { <span class="hl-prop">display</span>: <span class="hl-value">block</span>; }

<span class="hl-comment">/* Inline: flows with text */</span>
<span class="hl-selector">.inline-element</span> { <span class="hl-prop">display</span>: <span class="hl-value">inline</span>; }

<span class="hl-comment">/* Inline-block: inline flow + respects width/height */</span>
<span class="hl-selector">.inline-block-element</span> { <span class="hl-prop">display</span>: <span class="hl-value">inline-block</span>; }

<span class="hl-comment">/* None: removes from layout */</span>
<span class="hl-selector">.hidden</span> { <span class="hl-prop">display</span>: <span class="hl-value">none</span>; }
</div>

<h3>Block vs Inline vs Inline-Block</h3>
<table>
  <tr><th>Property</th><th>block</th><th>inline</th><th>inline-block</th></tr>
  <tr><td>Width/Height</td><td>Respects</td><td>Ignores</td><td>Respects</td></tr>
  <tr><td>Margin/Padding</td><td>All sides</td><td>Horizontal only</td><td>All sides</td></tr>
  <tr><td>New Line</td><td>Yes</td><td>No</td><td>No</td></tr>
</table>

<h3>display: none vs visibility: hidden</h3>
<div class="lesson-code">
<span class="hl-selector">.removed</span>   { <span class="hl-prop">display</span>: <span class="hl-value">none</span>; }      <span class="hl-comment">/* Removes from layout */</span>
<span class="hl-selector">.invisible</span> { <span class="hl-prop">visibility</span>: <span class="hl-value">hidden</span>; }  <span class="hl-comment">/* Hides but keeps space */</span>
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Use <code>inline-block</code> when you need inline flow with width/height support. For modern layouts, prefer Flexbox or Grid.
</div>
        `
      },
      {
        id: 9,
        title: 'CSS Position',
        desc: 'Controlling element placement with position properties.',
        content: `
<h2>CSS Position</h2>
<p>The <code>position</code> property controls how an element is positioned in the document.</p>

<h3>Position Values</h3>
<div class="lesson-code">
<span class="hl-comment">/* Static: default */</span>
<span class="hl-selector">.static</span>   { <span class="hl-prop">position</span>: <span class="hl-value">static</span>; }

<span class="hl-comment">/* Relative: offset from normal position */</span>
<span class="hl-selector">.relative</span> { <span class="hl-prop">position</span>: <span class="hl-value">relative</span>; <span class="hl-prop">top</span>: <span class="hl-number">10px</span>; }

<span class="hl-comment">/* Absolute: relative to nearest positioned ancestor */</span>
<span class="hl-selector">.absolute</span> { <span class="hl-prop">position</span>: <span class="hl-value">absolute</span>; <span class="hl-prop">top</span>: <span class="hl-number">0</span>; <span class="hl-prop">right</span>: <span class="hl-number">0</span>; }

<span class="hl-comment">/* Fixed: relative to viewport */</span>
<span class="hl-selector">.fixed</span>    { <span class="hl-prop">position</span>: <span class="hl-value">fixed</span>; <span class="hl-prop">top</span>: <span class="hl-number">0</span>; <span class="hl-prop">width</span>: <span class="hl-number">100%</span>; }

<span class="hl-comment">/* Sticky: toggles between relative and fixed */</span>
<span class="hl-selector">.sticky</span>   { <span class="hl-prop">position</span>: <span class="hl-value">sticky</span>; <span class="hl-prop">top</span>: <span class="hl-number">0</span>; }
</div>

<h3>Absolute Positioning</h3>
<p>A parent needs <code>position: relative</code> for absolute children to be contained within it.</p>
<div class="lesson-code">
<span class="hl-selector">.parent</span>  { <span class="hl-prop">position</span>: <span class="hl-value">relative</span>; }
<span class="hl-selector">.child</span>   { <span class="hl-prop">position</span>: <span class="hl-value">absolute</span>; <span class="hl-prop">top</span>: <span class="hl-number">20px</span>; <span class="hl-prop">left</span>: <span class="hl-number">20px</span>; }
</div>

<h3>z-index</h3>
<p>Controls stacking order of positioned elements. Higher values appear in front.</p>
<div class="lesson-code">
<span class="hl-selector">.overlay</span> { <span class="hl-prop">position</span>: <span class="hl-value">fixed</span>; <span class="hl-prop">z-index</span>: <span class="hl-number">1000</span>; }
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Avoid <code>position: absolute</code> for page layouts. Use Flexbox or Grid instead. Reserve absolute/fixed for overlays, modals, and tooltips.
</div>
        `
      },
      {
        id: 10,
        title: 'CSS Units',
        desc: 'Understanding different units for sizing and spacing.',
        content: `
<h2>CSS Units</h2>
<p>CSS has many units for specifying sizes. Choosing the right unit affects responsiveness.</p>

<h3>Absolute Units</h3>
<div class="lesson-code">
<span class="hl-comment">/* px: pixels (most common) */</span>
<span class="hl-selector">.box</span> { <span class="hl-prop">width</span>: <span class="hl-number">300px</span>; <span class="hl-prop">font-size</span>: <span class="hl-number">16px</span>; }
</div>

<h3>Relative Units</h3>
<div class="lesson-code">
<span class="hl-comment">/* em: relative to parent font size */</span>
<span class="hl-selector">.parent</span> { <span class="hl-prop">font-size</span>: <span class="hl-number">16px</span>; }
<span class="hl-selector">.child</span>  { <span class="hl-prop">font-size</span>: <span class="hl-number">1.5em</span>; }  <span class="hl-comment">/* = 24px */</span>

<span class="hl-comment">/* rem: relative to root (html) font size */</span>
<span class="hl-selector">html</span>  { <span class="hl-prop">font-size</span>: <span class="hl-number">16px</span>; }
<span class="hl-selector">.text</span> { <span class="hl-prop">font-size</span>: <span class="hl-number">2rem</span>; }  <span class="hl-comment">/* = 32px */</span>

<span class="hl-comment">/* %: relative to parent */</span>
<span class="hl-selector">.sidebar</span> { <span class="hl-prop">width</span>: <span class="hl-number">25%</span>; }

<span class="hl-comment">/* vw/vh: viewport width/height */</span>
<span class="hl-selector">.hero</span> { <span class="hl-prop">height</span>: <span class="hl-number">100vh</span>; }
</div>

<h3>When to Use Each Unit</h3>
<ul>
  <li><strong>px:</strong> Borders, shadows, small precise values</li>
  <li><strong>rem:</strong> Font sizes, spacing (most predictable)</li>
  <li><strong>em:</strong> Component-level scaling</li>
  <li><strong>%:</strong> Responsive widths</li>
  <li><strong>vw/vh:</strong> Full-screen sections</li>
</ul>

<div class="lesson-tip">
  <strong>Tip:</strong> Use <code>rem</code> for font sizes and <code>px</code> for borders. This makes your design scalable and accessible.
</div>
        `
      },
      {
        id: 11,
        title: 'Media Queries',
        desc: 'Making responsive designs for different screen sizes.',
        content: `
<h2>Media Queries</h2>
<p>Media queries let you apply CSS rules based on device characteristics like screen width, height, and orientation.</p>

<h3>Basic Syntax</h3>
<div class="lesson-code">
<span class="hl-comment">/* Mobile first: styles for screens >= 768px */</span>
<span class="hl-keyword">@media</span> (<span class="hl-prop">min-width</span>: <span class="hl-number">768px</span>) {
  <span class="hl-selector">.container</span> {
    <span class="hl-prop">max-width</span>: <span class="hl-number">720px</span>;
  }
}

<span class="hl-keyword">@media</span> (<span class="hl-prop">min-width</span>: <span class="hl-number">1024px</span>) {
  <span class="hl-selector">.container</span> {
    <span class="hl-prop">max-width</span>: <span class="hl-number">960px</span>;
  }
}
</div>

<h3>Common Breakpoints</h3>
<div class="lesson-code">
<span class="hl-comment">/* Mobile: 0 - 575px */</span>
<span class="hl-comment">/* Tablet: 576px - 991px */</span>
<span class="hl-comment">/* Desktop: 992px+ */</span>

<span class="hl-keyword">@media</span> (<span class="hl-prop">max-width</span>: <span class="hl-number">576px</span>) { <span class="hl-comment">/* Mobile */</span> }
<span class="hl-keyword">@media</span> (<span class="hl-prop">min-width</span>: <span class="hl-number">576px</span>) { <span class="hl-comment">/* Tablet+ */</span> }
<span class="hl-keyword">@media</span> (<span class="hl-prop">min-width</span>: <span class="hl-number">992px</span>) { <span class="hl-comment">/* Desktop+ */</span> }
</div>

<h3>Orientation & Other Features</h3>
<div class="lesson-code">
<span class="hl-keyword">@media</span> (<span class="hl-prop">orientation</span>: <span class="hl-value">landscape</span>) { ... }
<span class="hl-keyword">@media</span> (<span class="hl-prop">prefers-color-scheme</span>: <span class="hl-value">dark</span>) { ... }
<span class="hl-keyword">@media</span> (<span class="hl-prop">hover</span>: <span class="hl-value">hover</span>) { ... }
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Use a mobile-first approach  -  write base styles for mobile, then add <code>min-width</code> media queries for larger screens.
</div>
        `
      },
      {
        id: 12,
        title: 'CSS Variables',
        desc: 'Using custom properties for reusable values.',
        content: `
<h2>CSS Variables</h2>
<p>CSS Custom Properties (variables) let you store and reuse values throughout your stylesheet.</p>

<h3>Defining Variables</h3>
<div class="lesson-code">
<span class="hl-selector">:root</span> {
  <span class="hl-prop">--primary</span>: <span class="hl-value">#333</span>;
  <span class="hl-prop">--spacing</span>: <span class="hl-number">16px</span>;
  <span class="hl-prop">--font</span>: <span class="hl-value">"Inter", sans-serif</span>;
}
</div>

<h3>Using Variables</h3>
<div class="lesson-code">
<span class="hl-selector">.button</span> {
  <span class="hl-prop">background</span>: <span class="hl-value">var(--primary)</span>;
  <span class="hl-prop">padding</span>: <span class="hl-value">var(--spacing)</span>;
  <span class="hl-prop">font-family</span>: <span class="hl-value">var(--font)</span>;
}
</div>

<h3>Fallback Values</h3>
<div class="lesson-code">
<span class="hl-selector">.card</span> {
  <span class="hl-prop">color</span>: <span class="hl-value">var(--text-color, #333)</span>;
  <span class="hl-prop">font-size</span>: <span class="hl-value">var(--size, 16px)</span>;
}
</div>

<h3>Scoped Variables</h3>
<div class="lesson-code">
<span class="hl-selector">.theme-dark</span> {
  <span class="hl-prop">--bg</span>: <span class="hl-value">#1a1a1a</span>;
  <span class="hl-prop">--text</span>: <span class="hl-value">#fff</span>;
}

<span class="hl-selector">.theme-light</span> {
  <span class="hl-prop">--bg</span>: <span class="hl-value">#fff</span>;
  <span class="hl-prop">--text</span>: <span class="hl-value">#333</span>;
}
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Use CSS variables for theming, consistent spacing, and colors. They make maintaining and updating design systems much easier.
</div>
        `
      },
      {
        id: 13,
        title: 'Pseudo-Classes & Pseudo-Elements',
        desc: 'Styling elements in specific states or creating virtual elements.',
        content: `
<h2>Pseudo-Classes & Pseudo-Elements</h2>
<p>Pseudo-classes select elements in specific states. Pseudo-elements create virtual elements for styling.</p>

<h3>Common Pseudo-Classes</h3>
<div class="lesson-code">
<span class="hl-selector">a:hover</span>     { <span class="hl-prop">color</span>: <span class="hl-value">blue</span>; }
<span class="hl-selector">a:visited</span>   { <span class="hl-prop">color</span>: <span class="hl-value">purple</span>; }
<span class="hl-selector">input:focus</span> { <span class="hl-prop">border-color</span>: <span class="hl-value">blue</span>; }
<span class="hl-selector">li:first-child</span> { <span class="hl-prop">font-weight</span>: <span class="hl-value">bold</span>; }
<span class="hl-selector">li:last-child</span>  { <span class="hl-prop">margin-bottom</span>: <span class="hl-number">0</span>; }
<span class="hl-selector">p:not(.special)</span> { <span class="hl-prop">color</span>: <span class="hl-value">gray</span>; }
</div>

<h3>Nth Child</h3>
<div class="lesson-code">
<span class="hl-selector">tr:nth-child(even)</span> { <span class="hl-prop">background</span>: <span class="hl-value">#f5f5f5</span>; }
<span class="hl-selector">tr:nth-child(odd)</span>  { <span class="hl-prop">background</span>: <span class="hl-value">#fff</span>; }
<span class="hl-selector">li:nth-child(3n)</span>   { <span class="hl-prop">color</span>: <span class="hl-value">red</span>; }
</div>

<h3>Pseudo-Elements</h3>
<div class="lesson-code">
<span class="hl-selector">.quote::before</span>  { <span class="hl-prop">content</span>: <span class="hl-string">'&#x201C;'</span>; }
<span class="hl-selector">.quote::after</span>   { <span class="hl-prop">content</span>: <span class="hl-string">'&#x201D;'</span>; }
<span class="hl-selector">.highlight::selection</span> { <span class="hl-prop">background</span>: <span class="hl-value">yellow</span>; }
<span class="hl-selector">p::first-line</span> { <span class="hl-prop">font-weight</span>: <span class="hl-value">bold</span>; }
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Use <code>::before</code> and <code>::after</code> for decorative elements like icons, quotes, and separators without adding extra HTML.
</div>
        `
      },
      {
        id: 14,
        title: 'Backgrounds & Gradients',
        desc: 'Enhancing designs with background images and gradients.',
        content: `
<h2>Backgrounds & Gradients</h2>
<p>Background properties let you add images, gradients, and colors to element backgrounds.</p>

<h3>Background Basics</h3>
<div class="lesson-code">
<span class="hl-selector">.hero</span> {
  <span class="hl-prop">background-color</span>: <span class="hl-value">#f0f0f0</span>;
  <span class="hl-prop">background-image</span>: <span class="hl-value">url('image.jpg')</span>;
  <span class="hl-prop">background-size</span>: <span class="hl-value">cover</span>;
  <span class="hl-prop">background-position</span>: <span class="hl-value">center</span>;
  <span class="hl-prop">background-repeat</span>: <span class="hl-value">no-repeat</span>;
  <span class="hl-prop">background-attachment</span>: <span class="hl-value">fixed</span>;
}
</div>

<h3>Linear Gradients</h3>
<div class="lesson-code">
<span class="hl-selector">.gradient-1</span> {
  <span class="hl-prop">background</span>: <span class="hl-value">linear-gradient(to right, #ff6b6b, #4ecdc4)</span>;
}

<span class="hl-selector">.gradient-2</span> {
  <span class="hl-prop">background</span>: <span class="hl-value">linear-gradient(135deg, #667eea, #764ba2)</span>;
}
</div>

<h3>Radial Gradients</h3>
<div class="lesson-code">
<span class="hl-selector">.gradient-circle</span> {
  <span class="hl-prop">background</span>: <span class="hl-value">radial-gradient(circle, #fff, #333)</span>;
}
</div>

<h3>Shorthand</h3>
<div class="lesson-code">
<span class="hl-selector">.bg</span> {
  <span class="hl-prop">background</span>: <span class="hl-value">#fff url('img.png') no-repeat center / cover</span>;
}
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Use gradients for hero sections, buttons, and cards. They load faster than image files and scale perfectly at any resolution.
</div>
        `
      },
      {
        id: 15,
        title: 'Shadows & Effects',
        desc: 'Adding depth with box shadows, text shadows, and filters.',
        content: `
<h2>Shadows & Effects</h2>
<p>Shadows and filters add depth, dimension, and visual polish to your designs.</p>

<h3>Box Shadow</h3>
<div class="lesson-code">
<span class="hl-selector">.card</span> {
  <span class="hl-prop">box-shadow</span>: <span class="hl-number">0</span> <span class="hl-number">2px</span> <span class="hl-number">4px</span> <span class="hl-value">rgba(0,0,0,0.1)</span>;
}

<span class="hl-comment">/* x offset, y offset, blur, spread, color */</span>
<span class="hl-selector">.elevated</span> {
  <span class="hl-prop">box-shadow</span>: <span class="hl-number">0</span> <span class="hl-number">4px</span> <span class="hl-number">12px</span> <span class="hl-number">2px</span> <span class="hl-value">rgba(0,0,0,0.15)</span>;
}

<span class="hl-comment">/* Inset shadow */</span>
<span class="hl-selector">.pressed</span> {
  <span class="hl-prop">box-shadow</span>: <span class="hl-value">inset 0 2px 4px rgba(0,0,0,0.2)</span>;
}
</div>

<h3>Text Shadow</h3>
<div class="lesson-code">
<span class="hl-selector">.heading</span> {
  <span class="hl-prop">text-shadow</span>: <span class="hl-number">1px</span> <span class="hl-number">1px</span> <span class="hl-number">2px</span> <span class="hl-value">rgba(0,0,0,0.3)</span>;
}
</div>

<h3>CSS Filters</h3>
<div class="lesson-code">
<span class="hl-selector">.blur</span>      { <span class="hl-prop">filter</span>: <span class="hl-value">blur(4px)</span>; }
<span class="hl-selector">.grayscale</span> { <span class="hl-prop">filter</span>: <span class="hl-value">grayscale(100%)</span>; }
<span class="hl-selector">.bright</span>    { <span class="hl-prop">filter</span>: <span class="hl-value">brightness(1.2)</span>; }
<span class="hl-selector">.contrast</span>  { <span class="hl-prop">filter</span>: <span class="hl-value">contrast(150%)</span>; }
<span class="hl-selector">.sepia</span>     { <span class="hl-prop">filter</span>: <span class="hl-value">sepia(80%)</span>; }
</div>

<h3>Transition + Shadow Hover</h3>
<div class="lesson-code">
<span class="hl-selector">.card</span> {
  <span class="hl-prop">box-shadow</span>: <span class="hl-number">0</span> <span class="hl-number">2px</span> <span class="hl-number">4px</span> <span class="hl-value">rgba(0,0,0,0.1)</span>;
  <span class="hl-prop">transition</span>: <span class="hl-value">box-shadow 0.3s ease</span>;
}

<span class="hl-selector">.card:hover</span> {
  <span class="hl-prop">box-shadow</span>: <span class="hl-number">0</span> <span class="hl-number">8px</span> <span class="hl-number">24px</span> <span class="hl-value">rgba(0,0,0,0.2)</span>;
}
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Use subtle shadows for depth and larger shadows for elevated elements. Combine shadows with transitions for polished hover effects.
</div>
        `
      }
    ]
  },
  js: {
    title: 'JavaScript',
    icon: '#f7df1e',
    lessons: [
      {
        id: 1,
        title: 'Introduction to JavaScript',
        desc: 'What JavaScript is and how to use it.',
        content: `
<h2>What is JavaScript?</h2>
<p>JavaScript (JS) is a programming language that makes web pages interactive. It runs in the browser and can respond to user actions, manipulate HTML/CSS, and communicate with servers.</p>

<h3>Where JavaScript Runs</h3>
<ul>
  <li><strong>Client-side:</strong> In the browser (Chrome, Firefox, Safari, Edge)</li>
  <li><strong>Server-side:</strong> On the server with Node.js (advanced)</li>
</ul>

<h3>Adding JavaScript to a Page</h3>
<h4>1. Inline Script</h4>
<div class="lesson-code">
<span class="hl-tag">&lt;script&gt;</span>
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(<span class="hl-string">"Hello, World!"</span>);
<span class="hl-tag">&lt;/script&gt;</span>
</div>

<h4>2. External File (Recommended)</h4>
<div class="lesson-code">
<span class="hl-comment">&lt;!-- In HTML, usually before &lt;/body&gt; --&gt;</span>
<span class="hl-tag">&lt;script</span> <span class="hl-attr">src</span>=<span class="hl-string">"script.js"</span><span class="hl-tag">&gt;&lt;/script&gt;</span>
</div>

<h3>Your First JavaScript</h3>
<pre class="lesson-code" data-try="html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;
  &lt;h1 id="demo"&gt;Hello, World!&lt;/h1&gt;
  &lt;button onclick="sayHello()"&gt;Click Me&lt;/button&gt;
  &lt;script&gt;
    function sayHello() {
      document.getElementById('demo').innerHTML = 'Hello from JavaScript!';
    }
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<h3>Statements</h3>
<p>JavaScript instructions are called statements. Each statement ends with a semicolon <code>;</code> (optional but recommended).</p>

<div class="lesson-code">
<span class="hl-comment">// Three statements</span>
<span class="hl-keyword">let</span> x = <span class="hl-number">5</span>;
<span class="hl-keyword">let</span> y = <span class="hl-number">10</span>;
<span class="hl-keyword">let</span> sum = x + y;
</div>

<h3>Comments</h3>
<div class="lesson-code">
<span class="hl-comment">// Single-line comment</span>

<span class="hl-comment">/*
  Multi-line
  comment
*/</span>
</div>

<h3>Try It</h3>
<p>Open the <a href="pages/editor" class="lesson-link">Deoit Editor</a>, create a JS file, and type: <code>console.log("Hello!");</code> then click Run. Check the Console panel to see the output!</p>

<div class="lesson-tip">
  <strong>Tip:</strong> Use <code>console.log()</code> often  -  it's the most important debugging tool in JavaScript!
</div>
        `
      },
      {
        id: 2,
        title: 'Variables & Data Types',
        desc: 'Storing data with variables and understanding types.',
        content: `
<h2>Variables & Data Types</h2>
<p>Variables store data values. JavaScript has several data types and three ways to declare variables.</p>

<h3>Declaring Variables</h3>
<div class="lesson-code">
<span class="hl-keyword">let</span> name = <span class="hl-string">"Alice"</span>;     <span class="hl-comment">// Can be reassigned</span>
<span class="hl-keyword">const</span> age = <span class="hl-number">25</span>;         <span class="hl-comment">// Cannot be reassigned (preferred)</span>
<span class="hl-keyword">var</span> oldWay = <span class="hl-string">"avoid"</span>;  <span class="hl-comment">// Old way, avoid using</span>
</div>

<h3>When to Use let vs const</h3>
<ul>
  <li>Use <strong>const</strong> by default  -  for values that won't change</li>
  <li>Use <strong>let</strong> when you need to reassign the variable</li>
  <li>Avoid <strong>var</strong>  -  it has confusing scoping rules</li>
</ul>

<h3>Data Types</h3>
<div class="lesson-code">
<span class="hl-comment">// String: text</span>
<span class="hl-keyword">const</span> greeting = <span class="hl-string">"Hello"</span>;

<span class="hl-comment">// Number: integer or decimal</span>
<span class="hl-keyword">const</span> count = <span class="hl-number">42</span>;
<span class="hl-keyword">const</span> pi = <span class="hl-number">3.14</span>;

<span class="hl-comment">// Boolean: true or false</span>
<span class="hl-keyword">const</span> isActive = <span class="hl-keyword">true</span>;

<span class="hl-comment">// Array: list of values</span>
<span class="hl-keyword">const</span> fruits = [<span class="hl-string">"apple"</span>, <span class="hl-string">"banana"</span>, <span class="hl-string">"orange"</span>];

<span class="hl-comment">// Object: key-value pairs</span>
<span class="hl-keyword">const</span> person = {
  name: <span class="hl-string">"Alice"</span>,
  age: <span class="hl-number">25</span>,
  city: <span class="hl-string">"New York"</span>
};

<span class="hl-comment">// null: intentional empty value</span>
<span class="hl-keyword">const</span> empty = <span class="hl-keyword">null</span>;

<span class="hl-comment">// undefined: variable declared but not assigned</span>
<span class="hl-keyword">let</span> notDefined;
</div>

<h3>Checking Types</h3>
<div class="lesson-code">
<span class="hl-keyword">typeof</span> <span class="hl-string">"Hello"</span>;     <span class="hl-comment">// "string"</span>
<span class="hl-keyword">typeof</span> <span class="hl-number">42</span>;          <span class="hl-comment">// "number"</span>
<span class="hl-keyword">typeof</span> <span class="hl-keyword">true</span>;        <span class="hl-comment">// "boolean"</span>
<span class="hl-keyword">typeof</span> [];           <span class="hl-comment">// "object" (arrays are objects)</span>
</div>

<h3>Naming Conventions</h3>
<ul>
  <li>Use camelCase: <code>firstName</code>, <code>totalPrice</code></li>
  <li>Start with a letter, underscore, or $</li>
  <li>Use descriptive names: <code>userAge</code> not <code>ua</code></li>
</ul>

<div class="lesson-tip">
  <strong>Tip:</strong> Use descriptive variable names. Your future self will thank you when you come back to the code months later!
</div>
        `
      },
      {
        id: 3,
        title: 'Functions',
        desc: 'Reusable blocks of code.',
        content: `
<h2>Functions</h2>
<p>Functions are reusable blocks of code that perform specific tasks. They help you organize and reuse your code.</p>

<h3>Function Declaration</h3>
<div class="lesson-code">
<span class="hl-comment">// Define a function</span>
<span class="hl-keyword">function</span> <span class="hl-function">greet</span>() {
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(<span class="hl-string">"Hello!"</span>);
}

<span class="hl-comment">// Call (invoke) the function</span>
<span class="hl-function">greet</span>();  <span class="hl-comment">// Output: Hello!</span>
</div>

<h3>Parameters & Arguments</h3>
<div class="lesson-code">
<span class="hl-comment">// name is a parameter</span>
<span class="hl-keyword">function</span> <span class="hl-function">greet</span>(name) {
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(<span class="hl-string">"Hello, "</span> + name + <span class="hl-string">"!"</span>);
}

<span class="hl-comment">// "Alice" is an argument</span>
<span class="hl-function">greet</span>(<span class="hl-string">"Alice"</span>);  <span class="hl-comment">// Output: Hello, Alice!</span>
</div>

<h3>Return Values</h3>
<div class="lesson-code">
<span class="hl-keyword">function</span> <span class="hl-function">add</span>(a, b) {
  <span class="hl-keyword">return</span> a + b;
}

<span class="hl-keyword">const</span> sum = <span class="hl-function">add</span>(<span class="hl-number">5</span>, <span class="hl-number">3</span>);  <span class="hl-comment">// sum = 8</span>
</div>

<h3>Arrow Functions (ES6)</h3>
<p>A shorter syntax for writing functions.</p>
<div class="lesson-code">
<span class="hl-comment">// Traditional function</span>
<span class="hl-keyword">const</span> <span class="hl-function">double</span> = <span class="hl-keyword">function</span>(n) {
  <span class="hl-keyword">return</span> n * <span class="hl-number">2</span>;
};

<span class="hl-comment">// Arrow function (shorter)</span>
<span class="hl-keyword">const</span> <span class="hl-function">double</span> = (n) => {
  <span class="hl-keyword">return</span> n * <span class="hl-number">2</span>;
};

<span class="hl-comment">// Even shorter (implicit return)</span>
<span class="hl-keyword">const</span> <span class="hl-function">double</span> = n => n * <span class="hl-number">2</span>;
</div>

<h3>Default Parameters</h3>
<div class="lesson-code">
<span class="hl-keyword">function</span> <span class="hl-function">greet</span>(name = <span class="hl-string">"Guest"</span>) {
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(<span class="hl-string">"Hello, "</span> + name + <span class="hl-string">"!"</span>);
}

<span class="hl-function">greet</span>();           <span class="hl-comment">// Hello, Guest!</span>
<span class="hl-function">greet</span>(<span class="hl-string">"Bob"</span>);      <span class="hl-comment">// Hello, Bob!</span>
</div>

<h3>Why Use Functions?</h3>
<ul>
  <li><strong>Reusability:</strong> Write once, use many times</li>
  <li><strong>Organization:</strong> Break complex code into smaller pieces</li>
  <li><strong>Readability:</strong> Named functions describe what they do</li>
  <li><strong>Testing:</strong> Small functions are easy to test</li>
</ul>

<div class="lesson-tip">
  <strong>Tip:</strong> A function should do one thing and do it well. If a function does too many things, split it into smaller functions.
</div>
        `
      },
      {
        id: 4,
        title: 'DOM Manipulation',
        desc: 'Interacting with HTML elements using JavaScript.',
        content: `
<h2>DOM Manipulation</h2>
<p>The DOM (Document Object Model) is JavaScript's way of interacting with HTML elements. You can read, change, add, or remove elements on the page.</p>

<h3>Selecting Elements</h3>
<div class="lesson-code">
<span class="hl-comment">// By ID</span>
<span class="hl-keyword">const</span> header = <span class="hl-builtin">document</span>.<span class="hl-function">getElementById</span>(<span class="hl-string">"header"</span>);

<span class="hl-comment">// By class name (returns HTMLCollection)</span>
<span class="hl-keyword">const</span> cards = <span class="hl-builtin">document</span>.<span class="hl-function">getElementsByClassName</span>(<span class="hl-string">"card"</span>);

<span class="hl-comment">// By tag name</span>
<span class="hl-keyword">const</span> paragraphs = <span class="hl-builtin">document</span>.<span class="hl-function">getElementsByTagName</span>(<span class="hl-string">"p"</span>);

<span class="hl-comment">// Using CSS selectors (modern, recommended)</span>
<span class="hl-keyword">const</span> firstBtn = <span class="hl-builtin">document</span>.<span class="hl-function">querySelector</span>(<span class="hl-string">".btn"</span>);
<span class="hl-keyword">const</span> allBtns = <span class="hl-builtin">document</span>.<span class="hl-function">querySelectorAll</span>(<span class="hl-string">".btn"</span>);
</div>

<h3>Changing Content</h3>
<div class="lesson-code">
<span class="hl-keyword">const</span> title = <span class="hl-builtin">document</span>.<span class="hl-function">querySelector</span>(<span class="hl-string">"h1"</span>);

<span class="hl-comment">// Change text content</span>
title.<span class="hl-prop">textContent</span> = <span class="hl-string">"New Title"</span>;

<span class="hl-comment">// Change HTML content</span>
title.<span class="hl-prop">innerHTML</span> = <span class="hl-string">"New &lt;em&gt;Title&lt;/em&gt;"</span>;
</div>

<h3>Changing Styles</h3>
<div class="lesson-code">
<span class="hl-keyword">const</span> box = <span class="hl-builtin">document</span>.<span class="hl-function">querySelector</span>(<span class="hl-string">".box"</span>);

box.<span class="hl-prop">style</span>.<span class="hl-prop">backgroundColor</span> = <span class="hl-string">"red"</span>;
box.<span class="hl-prop">style</span>.<span class="hl-prop">fontSize</span> = <span class="hl-string">"24px"</span>;

<span class="hl-comment">// Better: use classList</span>
box.<span class="hl-prop">classList</span>.<span class="hl-function">add</span>(<span class="hl-string">"active"</span>);
box.<span class="hl-prop">classList</span>.<span class="hl-function">remove</span>(<span class="hl-string">"hidden"</span>);
box.<span class="hl-prop">classList</span>.<span class="hl-function">toggle</span>(<span class="hl-string">"visible"</span>);
</div>

<h3>Creating and Removing Elements</h3>
<div class="lesson-code">
<span class="hl-comment">// Create a new element</span>
<span class="hl-keyword">const</span> newPara = <span class="hl-builtin">document</span>.<span class="hl-function">createElement</span>(<span class="hl-string">"p"</span>);
newPara.<span class="hl-prop">textContent</span> = <span class="hl-string">"I am new!"</span>;

<span class="hl-comment">// Add it to the page</span>
<span class="hl-builtin">document</span>.<span class="hl-prop">body</span>.<span class="hl-function">appendChild</span>(newPara);

<span class="hl-comment">// Remove an element</span>
<span class="hl-keyword">const</span> oldEl = <span class="hl-builtin">document</span>.<span class="hl-function">querySelector</span>(<span class="hl-string">".old"</span>);
oldEl.<span class="hl-function">remove</span>();
</div>

<h3>Event Listeners</h3>
<div class="lesson-code">
<span class="hl-keyword">const</span> button = <span class="hl-builtin">document</span>.<span class="hl-function">querySelector</span>(<span class="hl-string">"button"</span>);

button.<span class="hl-function">addEventListener</span>(<span class="hl-string">"click"</span>, () => {
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(<span class="hl-string">"Button was clicked!"</span>);
  button.<span class="hl-prop">textContent</span> = <span class="hl-string">"Clicked!"</span>;
});
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Prefer <code>querySelector</code> and <code>querySelectorAll</code>  -  they are versatile and use familiar CSS selector syntax.
</div>
        `
      },
      {
        id: 5,
        title: 'Events & Interactivity',
        desc: 'Responding to user actions with events.',
        content: `
<h2>Events & Interactivity</h2>
<p>Events are actions that happen in the browser  -  clicks, keypresses, mouse movements, form submissions, and more. JavaScript can listen for and respond to events.</p>

<h3>Common Events</h3>
<div class="lesson-code">
<span class="hl-comment">// Click</span>
<span class="hl-builtin">document</span>.<span class="hl-function">querySelector</span>(<span class="hl-string">"button"</span>)
  .<span class="hl-function">addEventListener</span>(<span class="hl-string">"click"</span>, () => { ... });

<span class="hl-comment">// Mouse hover</span>
element.<span class="hl-function">addEventListener</span>(<span class="hl-string">"mouseenter"</span>, () => { ... });
element.<span class="hl-function">addEventListener</span>(<span class="hl-string">"mouseleave"</span>, () => { ... });

<span class="hl-comment">// Keyboard</span>
<span class="hl-builtin">document</span>.<span class="hl-function">addEventListener</span>(<span class="hl-string">"keydown"</span>, (e) => {
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(<span class="hl-string">"Key pressed:"</span>, e.key);
});

<span class="hl-comment">// Form submit</span>
form.<span class="hl-function">addEventListener</span>(<span class="hl-string">"submit"</span>, (e) => {
  e.<span class="hl-function">preventDefault</span>();  <span class="hl-comment">// Stop page reload</span>
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(<span class="hl-string">"Form submitted!"</span>);
});

<span class="hl-comment">// Input change</span>
input.<span class="hl-function">addEventListener</span>(<span class="hl-string">"input"</span>, () => {
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(<span class="hl-string">"Value:"</span>, input.value);
});
</div>

<h3>The Event Object</h3>
<p>Event listeners receive an event object <code>e</code> with useful properties and methods.</p>
<div class="lesson-code">
button.<span class="hl-function">addEventListener</span>(<span class="hl-string">"click"</span>, (e) => {
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(e.<span class="hl-prop">target</span>);     <span class="hl-comment">// The element clicked</span>
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(e.<span class="hl-prop">clientX</span>);   <span class="hl-comment">// Mouse X position</span>
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(e.<span class="hl-prop">clientY</span>);   <span class="hl-comment">// Mouse Y position</span>
  e.<span class="hl-function">preventDefault</span>();   <span class="hl-comment">// Prevent default behavior</span>
  e.<span class="hl-prop">stopPropagation</span>();  <span class="hl-comment">// Stop event bubbling</span>
});
</div>

<h3>Interactive Example: Counter</h3>
<div class="lesson-code">
<span class="hl-tag">&lt;button</span> <span class="hl-attr">id</span>=<span class="hl-string">"counterBtn"</span><span class="hl-tag">&gt;</span>0 clicks<span class="hl-tag">&lt;/button&gt;</span>

<span class="hl-tag">&lt;script&gt;</span>
  <span class="hl-keyword">let</span> count = <span class="hl-number">0</span>;
  <span class="hl-keyword">const</span> btn = <span class="hl-builtin">document</span>.<span class="hl-function">getElementById</span>(<span class="hl-string">"counterBtn"</span>);

  btn.<span class="hl-function">addEventListener</span>(<span class="hl-string">"click"</span>, () => {
    count++;
    btn.<span class="hl-prop">textContent</span> = count + <span class="hl-string">" clicks"</span>;
  });
<span class="hl-tag">&lt;/script&gt;</span>
</div>

<h3>Event Delegation</h3>
<p>Instead of adding listeners to many elements, add one to a parent and use <code>e.target</code> to identify the child.</p>
<div class="lesson-code">
<span class="hl-builtin">document</span>.<span class="hl-function">querySelector</span>(<span class="hl-string">"ul"</span>)
  .<span class="hl-function">addEventListener</span>(<span class="hl-string">"click"</span>, (e) => {
    <span class="hl-keyword">if</span> (e.<span class="hl-prop">target</span>.<span class="hl-prop">tagName</span> === <span class="hl-string">"LI"</span>) {
      <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(<span class="hl-string">"Clicked:"</span>, e.<span class="hl-prop">target</span>.<span class="hl-prop">textContent</span>);
    }
  });
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Use event delegation when you have many similar elements (like list items or table rows)  -  it's more efficient and works for dynamically added elements.
</div>
        `
      },
      {
        id: 6,
        title: 'Arrays & Loops',
        desc: 'Working with collections of data.',
        content: `
<h2>Arrays & Loops</h2>
<p>Arrays store collections of data, and loops let you work with each item in the collection.</p>

<h3>Creating Arrays</h3>
<div class="lesson-code">
<span class="hl-comment">// Literal syntax (recommended)</span>
<span class="hl-keyword">const</span> fruits = [<span class="hl-string">"apple"</span>, <span class="hl-string">"banana"</span>, <span class="hl-string">"orange"</span>];

<span class="hl-comment">// Mixed types</span>
<span class="hl-keyword">const</span> mixed = [<span class="hl-number">1</span>, <span class="hl-string">"hello"</span>, <span class="hl-keyword">true</span>, { name: <span class="hl-string">"Alice"</span> }];
</div>

<h3>Accessing Array Items</h3>
<div class="lesson-code">
fruits[<span class="hl-number">0</span>];  <span class="hl-comment">// "apple"  (first item, index 0)</span>
fruits[<span class="hl-number">1</span>];  <span class="hl-comment">// "banana"</span>
fruits[<span class="hl-number">2</span>];  <span class="hl-comment">// "orange"</span>
fruits.<span class="hl-prop">length</span>;  <span class="hl-comment">// 3</span>
fruits[fruits.<span class="hl-prop">length</span> - <span class="hl-number">1</span>];  <span class="hl-comment">// "orange" (last item)</span>
</div>

<h3>Array Methods</h3>
<div class="lesson-code">
<span class="hl-keyword">const</span> arr = [<span class="hl-number">1</span>, <span class="hl-number">2</span>, <span class="hl-number">3</span>];

arr.<span class="hl-function">push</span>(<span class="hl-number">4</span>);      <span class="hl-comment">// [1, 2, 3, 4]  (add to end)</span>
arr.<span class="hl-function">pop</span>();        <span class="hl-comment">// [1, 2, 3]      (remove from end)</span>
arr.<span class="hl-function">unshift</span>(<span class="hl-number">0</span>);   <span class="hl-comment">// [0, 1, 2, 3]  (add to start)</span>
arr.<span class="hl-function">shift</span>();      <span class="hl-comment">// [1, 2, 3]      (remove from start)</span>
arr.<span class="hl-function">indexOf</span>(<span class="hl-number">2</span>);   <span class="hl-comment">// 1              (find index)</span>
arr.<span class="hl-function">includes</span>(<span class="hl-number">3</span>);  <span class="hl-comment">// true           (check if exists)</span>
arr.<span class="hl-function">join</span>(<span class="hl-string">", "</span>);   <span class="hl-comment">// "1, 2, 3"      (convert to string)</span>
</div>

<h3>For Loop</h3>
<div class="lesson-code">
<span class="hl-keyword">for</span> (<span class="hl-keyword">let</span> i = <span class="hl-number">0</span>; i &lt; fruits.<span class="hl-prop">length</span>; i++) {
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(fruits[i]);
}
<span class="hl-comment">// "apple"</span>
<span class="hl-comment">// "banana"</span>
<span class="hl-comment">// "orange"</span>
</div>

<h3>For...of Loop (ES6)</h3>
<p>Simpler syntax for iterating over arrays.</p>
<div class="lesson-code">
<span class="hl-keyword">for</span> (<span class="hl-keyword">const</span> fruit <span class="hl-keyword">of</span> fruits) {
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(fruit);
}
</div>

<h3>Array Methods: forEach, map, filter</h3>
<div class="lesson-code">
<span class="hl-comment">// forEach: do something with each item</span>
fruits.<span class="hl-function">forEach</span>(fruit => {
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(<span class="hl-string">"I like "</span> + fruit);
});

<span class="hl-comment">// map: create a new array by transforming each item</span>
<span class="hl-keyword">const</span> uppercased = fruits.<span class="hl-function">map</span>(f => f.<span class="hl-function">toUpperCase</span>());
<span class="hl-comment">// ["APPLE", "BANANA", "ORANGE"]</span>

<span class="hl-comment">// filter: create a new array with items that pass a test</span>
<span class="hl-keyword">const</span> longNames = fruits.<span class="hl-function">filter</span>(f => f.<span class="hl-prop">length</span> &gt; <span class="hl-number">5</span>);
<span class="hl-comment">// ["banana", "orange"]</span>
</div>

<h3>While Loop</h3>
<div class="lesson-code">
<span class="hl-keyword">let</span> i = <span class="hl-number">0</span>;
<span class="hl-keyword">while</span> (i &lt; <span class="hl-number">5</span>) {
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(i);
  i++;
}
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Prefer <code>for...of</code> for simple iteration and <code>map</code>/<code>filter</code>/<code>forEach</code> for more specific transformations.
</div>
        `
      },
      {
        id: 7,
        title: 'ES6+ Features',
        desc: 'Modern JavaScript features you should know.',
        content: `
<h2>ES6+ Features</h2>
<p>ES6 (ECMAScript 2015) introduced many powerful features that modern JavaScript developers use every day.</p>

<h3>Arrow Functions</h3>
<p>Shorter function syntax with lexical <code>this</code> binding.</p>
<div class="lesson-code">
<span class="hl-comment">// Traditional</span>
<span class="hl-keyword">const</span> <span class="hl-function">add</span> = <span class="hl-keyword">function</span>(a, b) { <span class="hl-keyword">return</span> a + b; };

<span class="hl-comment">// Arrow</span>
<span class="hl-keyword">const</span> <span class="hl-function">add</span> = (a, b) => a + b;

<span class="hl-comment">// Single parameter doesn't need parens</span>
<span class="hl-keyword">const</span> <span class="hl-function">double</span> = n => n * <span class="hl-number">2</span>;
</div>

<h3>Template Literals</h3>
<p>Strings with embedded expressions using backticks <code>\`\`</code>.</p>
<div class="lesson-code">
<span class="hl-keyword">const</span> name = <span class="hl-string">"Alice"</span>;
<span class="hl-keyword">const</span> age = <span class="hl-number">25</span>;

<span class="hl-comment">// Old way</span>
<span class="hl-builtin">console</span>.<span class="hl-function">log</span>(<span class="hl-string">"My name is "</span> + name + <span class="hl-string">" and I am "</span> + age);

<span class="hl-comment">// With template literals</span>
<span class="hl-builtin">console</span>.<span class="hl-function">log</span>(<span class="hl-string">\`My name is \${name} and I am \${age}\`</span>);
</div>

<h3>Destructuring</h3>
<p>Extract values from arrays or objects into variables.</p>
<div class="lesson-code">
<span class="hl-comment">// Array destructuring</span>
<span class="hl-keyword">const</span> [first, second] = [<span class="hl-number">10</span>, <span class="hl-number">20</span>];
<span class="hl-builtin">console</span>.<span class="hl-function">log</span>(first);  <span class="hl-comment">// 10</span>

<span class="hl-comment">// Object destructuring</span>
<span class="hl-keyword">const</span> person = { name: <span class="hl-string">"Alice"</span>, age: <span class="hl-number">25</span> };
<span class="hl-keyword">const</span> { name, age } = person;
<span class="hl-builtin">console</span>.<span class="hl-function">log</span>(name);  <span class="hl-comment">// "Alice"</span>
</div>

<h3>Spread Operator (...)</h3>
<p>Spread arrays or objects into individual elements.</p>
<div class="lesson-code">
<span class="hl-comment">// Array spread</span>
<span class="hl-keyword">const</span> arr1 = [<span class="hl-number">1</span>, <span class="hl-number">2</span>, <span class="hl-number">3</span>];
<span class="hl-keyword">const</span> arr2 = [...arr1, <span class="hl-number">4</span>, <span class="hl-number">5</span>];  <span class="hl-comment">// [1, 2, 3, 4, 5]</span>

<span class="hl-comment">// Object spread</span>
<span class="hl-keyword">const</span> defaults = { theme: <span class="hl-string">"dark"</span>, lang: <span class="hl-string">"en"</span> };
<span class="hl-keyword">const</span> config = { ...defaults, lang: <span class="hl-string">"ar"</span> };
<span class="hl-comment">// { theme: "dark", lang: "ar" }</span>
</div>

<h3>Rest Parameters</h3>
<p>Collect remaining arguments into an array.</p>
<div class="lesson-code">
<span class="hl-keyword">function</span> <span class="hl-function">sum</span>(...numbers) {
  <span class="hl-keyword">return</span> numbers.<span class="hl-function">reduce</span>((total, n) => total + n, <span class="hl-number">0</span>);
}

<span class="hl-function">sum</span>(<span class="hl-number">1</span>, <span class="hl-number">2</span>, <span class="hl-number">3</span>, <span class="hl-number">4</span>);  <span class="hl-comment">// 10</span>
</div>

<h3>Optional Chaining (?.)</h3>
<p>Safely access nested properties without checking each level.</p>
<div class="lesson-code">
<span class="hl-keyword">const</span> user = { profile: { name: <span class="hl-string">"Alice"</span> } };

<span class="hl-comment">// Without optional chaining</span>
<span class="hl-keyword">const</span> name = user &amp;&amp; user.profile &amp;&amp; user.profile.name;

<span class="hl-comment">// With optional chaining</span>
<span class="hl-keyword">const</span> name = user?.profile?.name;
</div>

<h3>Nullish Coalescing (??)</h3>
<p>Use default value only when value is <code>null</code> or <code>undefined</code>.</p>
<div class="lesson-code">
<span class="hl-keyword">const</span> value = <span class="hl-number">0</span>;
<span class="hl-keyword">const</span> result = value ?? <span class="hl-number">10</span>;  <span class="hl-comment">// 0 (not 10, because 0 is not null/undefined)</span>

<span class="hl-comment">// vs || (which treats falsy values as defaults)</span>
<span class="hl-keyword">const</span> result2 = value || <span class="hl-number">10</span>;  <span class="hl-comment">// 10 (0 is falsy)</span>
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Modern JavaScript (ES6+) makes code cleaner and less error-prone. Use these features daily  -  they will become second nature quickly.
</div>
        `
      }
    ]
  },
  jsExtra: true
};
LESSONS.js.lessons.push(
      {
        id: 8,
        title: 'String Methods',
        desc: 'Working with text using built-in string methods.',
        content: `
<h2>String Methods</h2>
<p>JavaScript strings have many built-in methods for searching, modifying, and extracting text. Strings are immutable  -  methods always return a new string.</p>

<h3>Length Property</h3>
<div class="lesson-code">
<span class="hl-keyword">const</span> text = <span class="hl-string">"Hello, World!"</span>;
text.<span class="hl-prop">length</span>;       <span class="hl-comment">// 13</span>
</div>

<h3>Finding Text</h3>
<div class="lesson-code">
<span class="hl-keyword">const</span> msg = <span class="hl-string">"JavaScript is awesome!"</span>;

msg.<span class="hl-function">indexOf</span>(<span class="hl-string">"awesome"</span>);      <span class="hl-comment">// 15 (first match)</span>
msg.<span class="hl-function">indexOf</span>(<span class="hl-string">"x"</span>);            <span class="hl-comment">// -1 (not found)</span>
msg.<span class="hl-function">lastIndexOf</span>(<span class="hl-string">"a"</span>);       <span class="hl-comment">// 11 (last match)</span>
msg.<span class="hl-function">includes</span>(<span class="hl-string">"Script"</span>);      <span class="hl-comment">// true</span>
msg.<span class="hl-function">startsWith</span>(<span class="hl-string">"Java"</span>);     <span class="hl-comment">// true</span>
msg.<span class="hl-function">endsWith</span>(<span class="hl-string">"!"</span>);          <span class="hl-comment">// true</span>
</div>

<h3>Extracting Parts</h3>
<div class="lesson-code">
<span class="hl-keyword">const</span> str = <span class="hl-string">"Hello, World!"</span>;

str.<span class="hl-function">slice</span>(<span class="hl-number">0</span>, <span class="hl-number">5</span>);         <span class="hl-comment">// "Hello" (start, end)</span>
str.<span class="hl-function">slice</span>(<span class="hl-number">7</span>);            <span class="hl-comment">// "World!" (from index to end)</span>
str.<span class="hl-function">slice</span>(<span class="hl-number">-6</span>);           <span class="hl-comment">// "World!" (negative = from end)</span>
str.<span class="hl-function">substring</span>(<span class="hl-number">7</span>, <span class="hl-number">12</span>);   <span class="hl-comment">// "World"</span>
</div>

<h3>Transforming Text</h3>
<div class="lesson-code">
<span class="hl-keyword">const</span> name = <span class="hl-string">"  Alice  "</span>;

name.<span class="hl-function">toUpperCase</span>();       <span class="hl-comment">// "  ALICE  "</span>
name.<span class="hl-function">toLowerCase</span>();       <span class="hl-comment">// "  alice  "</span>
name.<span class="hl-function">trim</span>();              <span class="hl-comment">// "Alice"</span>
name.<span class="hl-function">trimStart</span>();         <span class="hl-comment">// "Alice  "</span>
name.<span class="hl-function">trimEnd</span>();           <span class="hl-comment">// "  Alice"</span>
</div>

<h3>Replacing &amp; Splitting</h3>
<div class="lesson-code">
<span class="hl-keyword">const</span> msg = <span class="hl-string">"I love cats"</span>;

msg.<span class="hl-function">replace</span>(<span class="hl-string">"cats"</span>, <span class="hl-string">"dogs"</span>);     <span class="hl-comment">// "I love dogs"</span>
<span class="hl-string">"aabbcc"</span>.<span class="hl-function">replaceAll</span>(<span class="hl-string">"b"</span>, <span class="hl-string">"x"</span>);   <span class="hl-comment">// "aaxxcc"</span>

<span class="hl-comment">// split: string to array</span>
<span class="hl-string">"apple,banana,orange"</span>.<span class="hl-function">split</span>(<span class="hl-string">","</span>);
<span class="hl-comment">// ["apple", "banana", "orange"]</span>

[<span class="hl-string">"a"</span>, <span class="hl-string">"b"</span>, <span class="hl-string">"c"</span>].<span class="hl-function">join</span>(<span class="hl-string">"-"</span>);   <span class="hl-comment">// "a-b-c"</span>
</div>

<h3>Template Literals</h3>
<p>Use backticks for strings with embedded expressions and multi-line support.</p>

<div class="lesson-code">
<span class="hl-keyword">const</span> name = <span class="hl-string">"Alice"</span>;
<span class="hl-keyword">const</span> age = <span class="hl-number">25</span>;

<span class="hl-comment">// With template literals</span>
<span class="hl-builtin">console</span>.<span class="hl-function">log</span>(<span class="hl-string">\`Hello, \${name}! Age: \${age}\`</span>);

<span class="hl-comment">// Multi-line string</span>
<span class="hl-keyword">const</span> html = <span class="hl-string">\`
  &lt;h2&gt;Welcome, \${name}&lt;/h2&gt;
  &lt;p&gt;Age: \${age}&lt;/p&gt;
\`</span>;
</div>

<h3>Accessing Characters</h3>
<div class="lesson-code">
<span class="hl-keyword">const</span> str = <span class="hl-string">"Hello"</span>;
str[<span class="hl-number">0</span>];                <span class="hl-comment">// "H"</span>
str.<span class="hl-function">charAt</span>(<span class="hl-number">4</span>);          <span class="hl-comment">// "o"</span>
str.<span class="hl-function">charCodeAt</span>(<span class="hl-number">0</span>);      <span class="hl-comment">// 72 (Unicode code point)</span>
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Template literals are the modern way to build strings with variables. They replace messy string concatenation with <code>+</code> and support multi-line text.
</div>
        `
      },
      {
        id: 9,
        title: 'Number & Math Methods',
        desc: 'Working with numbers, calculations, and formatting.',
        content: `
<h2>Number &amp; Math Methods</h2>
<p>JavaScript has built-in number types and a <code>Math</code> object with useful methods for calculations, rounding, and randomization.</p>

<h3>Parsing Numbers</h3>
<div class="lesson-code">
<span class="hl-comment">// parseInt: extract integer from string</span>
<span class="hl-builtin">parseInt</span>(<span class="hl-string">"42px"</span>);          <span class="hl-comment">// 42</span>
<span class="hl-builtin">parseInt</span>(<span class="hl-string">"abc"</span>);            <span class="hl-comment">// NaN (not a number)</span>
<span class="hl-builtin">parseInt</span>(<span class="hl-string">"101"</span>, <span class="hl-number">2</span>);        <span class="hl-comment">// 5 (binary to decimal)</span>

<span class="hl-comment">// parseFloat: extract decimal from string</span>
<span class="hl-builtin">parseFloat</span>(<span class="hl-string">"3.14px"</span>);      <span class="hl-comment">// 3.14</span>

<span class="hl-comment">// Number(): strict conversion</span>
<span class="hl-builtin">Number</span>(<span class="hl-string">"42"</span>);              <span class="hl-comment">// 42</span>
<span class="hl-builtin">Number</span>(<span class="hl-string">""</span>);               <span class="hl-comment">// 0</span>
<span class="hl-builtin">Number</span>(<span class="hl-string">"abc"</span>);             <span class="hl-comment">// NaN</span>
</div>

<h3>Math Methods</h3>
<div class="lesson-code">
<span class="hl-builtin">Math</span>.<span class="hl-function">round</span>(<span class="hl-number">4.6</span>);       <span class="hl-comment">// 5 (nearest integer)</span>
<span class="hl-builtin">Math</span>.<span class="hl-function">floor</span>(<span class="hl-number">4.9</span>);       <span class="hl-comment">// 4 (round down)</span>
<span class="hl-builtin">Math</span>.<span class="hl-function">ceil</span>(<span class="hl-number">4.1</span>);        <span class="hl-comment">// 5 (round up)</span>
<span class="hl-builtin">Math</span>.<span class="hl-function">trunc</span>(<span class="hl-number">4.9</span>);       <span class="hl-comment">// 4 (remove decimals)</span>
</div>

<h3>Min, Max &amp; Random</h3>
<div class="lesson-code">
<span class="hl-builtin">Math</span>.<span class="hl-function">max</span>(<span class="hl-number">10</span>, <span class="hl-number">5</span>, <span class="hl-number">20</span>);    <span class="hl-comment">// 20</span>
<span class="hl-builtin">Math</span>.<span class="hl-function">min</span>(<span class="hl-number">10</span>, <span class="hl-number">5</span>, <span class="hl-number">20</span>);    <span class="hl-comment">// 5</span>

<span class="hl-comment">// Random between min and max (inclusive)</span>
<span class="hl-keyword">function</span> <span class="hl-function">randomBetween</span>(min, max) {
  <span class="hl-keyword">return</span> <span class="hl-builtin">Math</span>.<span class="hl-function">floor</span>(
    <span class="hl-builtin">Math</span>.<span class="hl-function">random</span>() * (max - min + <span class="hl-number">1</span>) + min
  );
}
<span class="hl-function">randomBetween</span>(<span class="hl-number">1</span>, <span class="hl-number">6</span>);   <span class="hl-comment">// 1-6 (dice roll)</span>

<span class="hl-builtin">Math</span>.<span class="hl-function">random</span>();          <span class="hl-comment">// 0 to 0.999...</span>
</div>

<h3>Formatting Numbers</h3>
<div class="lesson-code">
<span class="hl-comment">// toFixed: decimal places (returns string)</span>
<span class="hl-number">3.14159</span>.<span class="hl-function">toFixed</span>(<span class="hl-number">2</span>);    <span class="hl-comment">// "3.14"</span>
<span class="hl-number">2.5</span>.<span class="hl-function">toFixed</span>(<span class="hl-number">0</span>);          <span class="hl-comment">// "3"</span>

<span class="hl-comment">// toLocaleString: formatted with commas</span>
<span class="hl-number">1234567</span>.<span class="hl-function">toLocaleString</span>();  <span class="hl-comment">// "1,234,567"</span>
<span class="hl-number">1234567</span>.<span class="hl-function">toLocaleString</span>(<span class="hl-string">"en-US"</span>, {
  <span class="hl-prop">style</span>: <span class="hl-string">"currency"</span>,
  <span class="hl-prop">currency</span>: <span class="hl-string">"USD"</span>
});  <span class="hl-comment">// "$1,234,567.00"</span>
</div>

<h3>Other Useful Math</h3>
<div class="lesson-code">
<span class="hl-builtin">Math</span>.<span class="hl-prop">PI</span>;         <span class="hl-comment">// 3.141592653589793</span>
<span class="hl-builtin">Math</span>.<span class="hl-function">abs</span>(<span class="hl-number">-5</span>);     <span class="hl-comment">// 5 (absolute value)</span>
<span class="hl-builtin">Math</span>.<span class="hl-function">pow</span>(<span class="hl-number">2</span>, <span class="hl-number">3</span>);   <span class="hl-comment">// 8 (2 to the power of 3)</span>
<span class="hl-builtin">Math</span>.<span class="hl-function">sqrt</span>(<span class="hl-number">16</span>);    <span class="hl-comment">// 4 (square root)</span>
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> <code>toFixed()</code> returns a string. Use <code>Number()</code> to convert it back if you need to do more math.
</div>
        `
      },
      {
        id: 10,
        title: 'JSON & Fetch API',
        desc: 'Working with data formats and making HTTP requests.',
        content: `
<h2>JSON &amp; Fetch API</h2>
<p>JSON is the standard data format for web APIs. The Fetch API lets you send and receive data from servers.</p>

<h3>JSON Basics</h3>
<div class="lesson-code">
<span class="hl-keyword">const</span> user = { name: <span class="hl-string">"Alice"</span>, age: <span class="hl-number">25</span> };

<span class="hl-comment">// Convert to JSON string</span>
<span class="hl-keyword">const</span> json = <span class="hl-builtin">JSON</span>.<span class="hl-function">stringify</span>(user);
<span class="hl-comment">// '{\"name\":\"Alice\",\"age\":25}'</span>

<span class="hl-comment">// Parse JSON string back to object</span>
<span class="hl-keyword">const</span> parsed = <span class="hl-builtin">JSON</span>.<span class="hl-function">parse</span>(json);
<span class="hl-builtin">console</span>.<span class="hl-function">log</span>(parsed.name);  <span class="hl-comment">// "Alice"</span>
</div>

<h3>The Fetch API</h3>
<div class="lesson-code">
<span class="hl-comment">// GET request with promises</span>
<span class="hl-function">fetch</span>(<span class="hl-string">"https://api.example.com/users"</span>)
  .<span class="hl-function">then</span>(res => res.<span class="hl-function">json</span>())
  .<span class="hl-function">then</span>(data => <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(data))
  .<span class="hl-function">catch</span>(err => <span class="hl-builtin">console</span>.<span class="hl-function">error</span>(err));
</div>

<h3>Async/Await</h3>
<p>A cleaner syntax for working with Promises.</p>
<div class="lesson-code">
<span class="hl-keyword">async function</span> <span class="hl-function">getUsers</span>() {
  <span class="hl-keyword">try</span> {
    <span class="hl-keyword">const</span> res = <span class="hl-keyword">await</span> <span class="hl-function">fetch</span>(<span class="hl-string">"/api/users"</span>);
    <span class="hl-keyword">const</span> data = <span class="hl-keyword">await</span> res.<span class="hl-function">json</span>();
    <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(data);
  } <span class="hl-keyword">catch</span> (err) {
    <span class="hl-builtin">console</span>.<span class="hl-function">error</span>(<span class="hl-string">"Failed:"</span>, err);
  }
}
</div>

<h3>POST Request</h3>
<div class="lesson-code">
<span class="hl-keyword">async function</span> <span class="hl-function">createUser</span>(name, email) {
  <span class="hl-keyword">const</span> res = <span class="hl-keyword">await</span> <span class="hl-function">fetch</span>(<span class="hl-string">"/api/users"</span>, {
    <span class="hl-prop">method</span>: <span class="hl-string">"POST"</span>,
    <span class="hl-prop">headers</span>: {
      <span class="hl-string">"Content-Type"</span>: <span class="hl-string">"application/json"</span>
    },
    <span class="hl-prop">body</span>: <span class="hl-builtin">JSON</span>.<span class="hl-function">stringify</span>({ name, email })
  });
  <span class="hl-keyword">return</span> res.<span class="hl-function">json</span>();
}
</div>

<h3>Checking Response Status</h3>
<div class="lesson-code">
<span class="hl-keyword">const</span> res = <span class="hl-keyword">await</span> <span class="hl-function">fetch</span>(<span class="hl-string">"/api/data"</span>);

<span class="hl-keyword">if</span> (!res.<span class="hl-prop">ok</span>) {
  <span class="hl-keyword">throw new</span> <span class="hl-builtin">Error</span>(<span class="hl-string">\`HTTP error: \${res.status}\`</span>);
}

<span class="hl-keyword">const</span> data = <span class="hl-keyword">await</span> res.<span class="hl-function">json</span>();
</div>

<h3>Displaying Fetched Data</h3>
<pre class="lesson-code" data-try="html">&lt;div id="users"&gt;Loading...&lt;/div&gt;
&lt;script&gt;
  async function loadUsers() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();
      const html = users.map(u =&gt;
        "&lt;div style='margin:8px;padding:12px;background:#f0f0f0;border-radius:6px;'&gt;" +
        "&lt;strong&gt;" + u.name + "&lt;/strong&gt;&lt;br&gt;" + u.email +
        "&lt;/div&gt;"
      ).join("");
      document.getElementById("users").innerHTML = html;
    } catch (err) {
      document.getElementById("users").textContent = "Error loading data.";
    }
  }
  loadUsers();
&lt;/script&gt;</pre>

<div class="lesson-tip">
  <strong>Tip:</strong> Always use <code>try/catch</code> with fetch. Network requests can fail for many reasons  -  no internet, server down, invalid URL, or CORS errors.
</div>
        `
      },
      {
        id: 11,
        title: 'Date & Time',
        desc: 'Working with dates, times, and formatting.',
        content: `
<h2>Date &amp; Time</h2>
<p>JavaScript's <code>Date</code> object handles dates and times. The <code>Intl.DateTimeFormat</code> API provides locale-aware formatting.</p>

<h3>Creating Dates</h3>
<div class="lesson-code">
<span class="hl-comment">// Current date and time</span>
<span class="hl-keyword">const</span> now = <span class="hl-keyword">new</span> <span class="hl-builtin">Date</span>();
<span class="hl-builtin">console</span>.<span class="hl-function">log</span>(now);

<span class="hl-comment">// Specific date (month is 0-indexed)</span>
<span class="hl-keyword">const</span> birthday = <span class="hl-keyword">new</span> <span class="hl-builtin">Date</span>(<span class="hl-number">2000</span>, <span class="hl-number">5</span>, <span class="hl-number">15</span>);  <span class="hl-comment">// June 15</span>

<span class="hl-comment">// From string</span>
<span class="hl-keyword">const</span> date = <span class="hl-keyword">new</span> <span class="hl-builtin">Date</span>(<span class="hl-string">"2026-07-25"</span>);
</div>

<h3>Getting Date Parts</h3>
<div class="lesson-code">
<span class="hl-keyword">const</span> now = <span class="hl-keyword">new</span> <span class="hl-builtin">Date</span>();

now.<span class="hl-function">getFullYear</span>();    <span class="hl-comment">// 2026</span>
now.<span class="hl-function">getMonth</span>();       <span class="hl-comment">// 6 (July, 0-indexed)</span>
now.<span class="hl-function">getDate</span>();        <span class="hl-comment">// 25 (day of month)</span>
now.<span class="hl-function">getDay</span>();         <span class="hl-comment">// 0-6 (0=Sunday)</span>
now.<span class="hl-function">getHours</span>();       <span class="hl-comment">// 14 (24-hour)</span>
now.<span class="hl-function">getMinutes</span>();     <span class="hl-comment">// 30</span>
now.<span class="hl-function">getSeconds</span>();     <span class="hl-comment">// 45</span>
now.<span class="hl-function">getTime</span>();        <span class="hl-comment">// ms since Jan 1, 1970</span>
</div>

<h3>Formatting Dates</h3>
<div class="lesson-code">
<span class="hl-keyword">const</span> date = <span class="hl-keyword">new</span> <span class="hl-builtin">Date</span>();

date.<span class="hl-function">toLocaleDateString</span>(<span class="hl-string">"en-US"</span>);  <span class="hl-comment">// "7/25/2026"</span>
date.<span class="hl-function">toLocaleDateString</span>(<span class="hl-string">"en-GB"</span>);  <span class="hl-comment">// "25/07/2026"</span>
date.<span class="hl-function">toLocaleTimeString</span>(<span class="hl-string">"en-US"</span>);  <span class="hl-comment">// "2:30:45 PM"</span>
date.<span class="hl-function">toISOString</span>();  <span class="hl-comment">// "2026-07-25T14:30:45.000Z"</span>
</div>

<h3>Intl.DateTimeFormat</h3>
<div class="lesson-code">
<span class="hl-keyword">const</span> date = <span class="hl-keyword">new</span> <span class="hl-builtin">Date</span>();

<span class="hl-keyword">const</span> fmt = <span class="hl-keyword">new</span> <span class="hl-builtin">Intl.DateTimeFormat</span>(<span class="hl-string">"en-US"</span>, {
  <span class="hl-prop">year</span>: <span class="hl-string">"numeric"</span>,
  <span class="hl-prop">month</span>: <span class="hl-string">"long"</span>,
  <span class="hl-prop">day</span>: <span class="hl-string">"numeric"</span>,
  <span class="hl-prop">weekday</span>: <span class="hl-string">"long"</span>
});
<span class="hl-builtin">console</span>.<span class="hl-function">log</span>(fmt.<span class="hl-function">format</span>(date));
<span class="hl-comment">// "Saturday, July 25, 2026"</span>
</div>

<h3>Timestamps &amp; Diff</h3>
<div class="lesson-code">
<span class="hl-keyword">const</span> d1 = <span class="hl-keyword">new</span> <span class="hl-builtin">Date</span>(<span class="hl-string">"2026-01-01"</span>);
<span class="hl-keyword">const</span> d2 = <span class="hl-keyword">new</span> <span class="hl-builtin">Date</span>(<span class="hl-string">"2026-12-31"</span>);
<span class="hl-keyword">const</span> diff = (d2 - d1) / (<span class="hl-number">1000</span> * <span class="hl-number">60</span> * <span class="hl-number">60</span> * <span class="hl-number">24</span>);
<span class="hl-builtin">console</span>.<span class="hl-function">log</span>(diff + <span class="hl-string">" days"</span>);  <span class="hl-comment">// "364 days"</span>
</div>

<div class="lesson-tip">
  <strong>Tip:</strong> Always store dates as ISO strings or timestamps. For serious date work, consider libraries like date-fns or Luxon.
</div>
        `
      },
      {
        id: 12,
        title: 'Error Handling & Debugging',
        desc: 'Managing errors gracefully and debugging effectively.',
        content: `
<h2>Error Handling &amp; Debugging</h2>
<p>Errors are inevitable. Learning to handle them gracefully and debug efficiently is a critical skill.</p>

<h3>Try/Catch/Finally</h3>
<div class="lesson-code">
<span class="hl-keyword">try</span> {
  <span class="hl-keyword">const</span> data = <span class="hl-builtin">JSON</span>.<span class="hl-function">parse</span>(<span class="hl-string">"invalid json"</span>);
} <span class="hl-keyword">catch</span> (error) {
  <span class="hl-builtin">console</span>.<span class="hl-function">error</span>(<span class="hl-string">"Parse failed:"</span>, error.<span class="hl-prop">message</span>);
} <span class="hl-keyword">finally</span> {
  <span class="hl-builtin">console</span>.<span class="hl-function">log</span>(<span class="hl-string">"This always runs"</span>);
}
</div>

<h3>Throwing Errors</h3>
<div class="lesson-code">
<span class="hl-keyword">function</span> <span class="hl-function">divide</span>(a, b) {
  <span class="hl-keyword">if</span> (b === <span class="hl-number">0</span>) {
    <span class="hl-keyword">throw new</span> <span class="hl-builtin">Error</span>(<span class="hl-string">"Cannot divide by zero"</span>);
  }
  <span class="hl-keyword">return</span> a / b;
}

<span class="hl-keyword">try</span> {
  <span class="hl-function">divide</span>(<span class="hl-number">10</span>, <span class="hl-number">0</span>);
} <span class="hl-keyword">catch</span> (e) {
  <span class="hl-builtin">console</span>.<span class="hl-function">error</span>(e.<span class="hl-prop">message</span>);
}
</div>

<h3>Common Error Types</h3>
<div class="lesson-code">
<span class="hl-comment">// ReferenceError: variable not defined</span>
<span class="hl-builtin">console</span>.<span class="hl-function">log</span>(nonExistent);

<span class="hl-comment">// TypeError: wrong type used</span>
<span class="hl-number">42</span>.<span class="hl-function">toUpperCase</span>();  <span class="hl-comment">// numbers don't have this</span>

<span class="hl-comment">// SyntaxError: invalid code</span>
<span class="hl-builtin">eval</span>(<span class="hl-string">"function 123() {}"</span>);

<span class="hl-comment">// RangeError: value out of range</span>
(<span class="hl-number">-1</span>).<span class="hl-function">toString</span>(<span class="hl-number">36</span>);
</div>

<h3>Console Debugging</h3>
<div class="lesson-code">
<span class="hl-builtin">console</span>.<span class="hl-function">log</span>(<span class="hl-string">"Basic log"</span>);
<span class="hl-builtin">console</span>.<span class="hl-function">warn</span>(<span class="hl-string">"Warning!"</span>);       <span class="hl-comment">// Yellow</span>
<span class="hl-builtin">console</span>.<span class="hl-function">error</span>(<span class="hl-string">"Error!"</span>);        <span class="hl-comment">// Red</span>
<span class="hl-builtin">console</span>.<span class="hl-function">table</span>([{ a: <span class="hl-number">1</span>, b: <span class="hl-number">2</span> }]);  <span class="hl-comment">// Table</span>
<span class="hl-builtin">console</span>.<span class="hl-function">time</span>(<span class="hl-string">"loop"</span>);
<span class="hl-comment">// ... code ...</span>
<span class="hl-builtin">console</span>.<span class="hl-function">timeEnd</span>(<span class="hl-string">"loop"</span>);       <span class="hl-comment">// Elapsed time</span>
<span class="hl-builtin">console</span>.<span class="hl-function">group</span>(<span class="hl-string">"Step 1"</span>);
<span class="hl-builtin">console</span>.<span class="hl-function">groupEnd</span>();
</div>

<h3>The Debugger Keyword</h3>
<div class="lesson-code">
<span class="hl-keyword">function</span> <span class="hl-function">problematic</span>(x) {
  <span class="hl-keyword">const</span> result = x * <span class="hl-number">2</span>;
  <span class="hl-keyword">debugger</span>;  <span class="hl-comment">// Pauses when DevTools open</span>
  <span class="hl-keyword">return</span> result + <span class="hl-number">1</span>;
}
</div>

<h3>Graceful Error Handling</h3>
<pre class="lesson-code" data-try="html">&lt;div id="output"&gt;&lt;/div&gt;
&lt;script&gt;
  function safeJsonParse(str) {
    try {
      return { data: JSON.parse(str), error: null };
    } catch (e) {
      return { data: null, error: e.message };
    }
  }

  const r1 = safeJsonParse('{"name":"Alice"}');
  const r2 = safeJsonParse("not json");

  document.getElementById("output").innerHTML =
    "&lt;p&gt;Valid: " + JSON.stringify(r1.data) + "&lt;/p&gt;" +
    "&lt;p&gt;Invalid: " + r2.error + "&lt;/p&gt;";
&lt;/script&gt;</pre>

<h3>Common Debugging Tips</h3>
<ul>
  <li>Use <code>debugger</code> keyword to pause execution</li>
  <li>Check browser Console for errors (F12)</li>
  <li>Use <code>console.table()</code> to inspect data</li>
  <li>Read error messages  -  they include file and line number</li>
  <li>Google the exact error message for solutions</li>
</ul>

<div class="lesson-tip">
  <strong>Tip:</strong> Don't silently swallow errors. Log them, show user-friendly messages, and consider sending them to error tracking services.
</div>
        `
      }
);
