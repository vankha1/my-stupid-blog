const summary = "This post is my summary of github instructions after getting so hurt !!!"
const title = "Github instruction by myself"
const createdAt = "24/07/2023"
const modifiedAt = "24/07/2023"
const content = `<h1 id="hướng-dẫn-sử-dụng-github">Hướng dẫn sử dụng gitHub</h1>
<p><img alt="image" src="https://i.ibb.co/YpqPTJL/Init-git.png"></p>
<h4 id="cấu-hình-tên-và-email">Cấu hình tên và email</h4>
<pre><label>sh</label><code class="language-sh">git config --global user.name 'Kha' 
</code></pre>
<pre><label>sh</label><code class="language-sh">git config --global user.email 'vovankha2003@gmail.com'
</code></pre>
<h4 id="khởi-tạo-git-repo">Khởi tạo git repo</h4>
<pre><label>sh</label><code class="language-sh">git init
</code></pre>
<h4 id="kiểm-tra-trạng-thái-của-các-file-">Kiểm tra trạng thái của các file '</h4>
<pre><label>sh</label><code class="language-sh">git status
</code></pre>
<p><strong>Staging Area</strong> là khu vực để có thể theo dõi được file mà sẽ được commit ở lần commit tiếp theo</p>
<h4 id="thư-mục-đang-làm-việc-">Thư mục đang làm việc :</h4>
<table>
<thead>
<tr>
<th>Staging Area</th>
<th>Committed</th>
</tr>
</thead>
<tbody><tr>
<td>index.html</td>
<td></td>
</tr>
<tr>
<td>index.css</td>
<td></td>
</tr>
</tbody></table>
<h4 id="để-đưa-1-file-từ-thư-mục-đang-làm-viện-sang-staging-area-">Để đưa 1 file từ thư mục đang làm viện sang staging area :</h4>
<pre><label>sh</label><code class="language-sh">git add index.html 
</code></pre>
<p>( index.html là ví dụ cho tên file, để thêm 2 file cùng lúc thì chỉ cần dấu cách giữa 2 tên file)
<br>
→ khi đó sử dụng <code>git status</code> thì ta chỉ còn có <strong>index.css</strong> và changes to be committed : <strong>index.html</strong></p>
<h4 id="để-đưa-từ-staging-area-về-lại-thư-mục-đang-làm-việc-">Để đưa từ staging area về lại thư mục đang làm việc :</h4>
<pre><label>sh</label><code class="language-sh">git restore --staged "tên file"
</code></pre>
<h4 id="để-đưa-1-file-từ-trạng-thái-staging-area-sang-committed-">Để đưa 1 file từ trạng thái staging area sang committed :</h4>
<pre><label>sh</label><code class="language-sh">git commit -m "tên commit"  (tên commit đặt bất kì )
</code></pre>
<p>→ commit này đã được lưu trữ trong repo</p>
<p>→ Khi chúng ta thay đổi code trong một file thì file đó sẽ trở về thư mục đang làm việc, để đưa lên staging area và committed, ta pải dùng 2 câu lệnh trên.</p>
<h4 id="xem-lại-commit-đã-tạo-">Xem lại commit đã tạo :</h4>
<pre><label>sh</label><code class="language-sh">git log
</code></pre>
<h2 id="để-thoát-chế-độ-git-log-thì-ấn-nút-q">→ để thoát chế độ git log thì ấn nút Q
  </h2>
<h2 id="phần-trên-chỉ-là-phía-local-mình-sửa-thay-đổi-các-thứ">Phần trên chỉ là phía local mình sửa, thay đổi các thứ</h2>
<h3 id="giờ-chúng-ta-sẽ-bắt-đầu-với-phía-serve-có-nghĩa-là-kết-nối-với-github">Giờ chúng ta sẽ bắt đầu với phía serve, có nghĩa là kết nối với GitHub</h3>
<h4 id="tạo-một-repo-trên-github">Tạo một repo trên github</h4>
<h4 id="để-kết-nối-repo-dưới-local-với-repo-trên-github-">Để kết nối repo dưới local với repo trên github :</h4>
<pre><label>sh</label><code class="language-sh">git remote add orgin link github
</code></pre>
<pre><label>sh</label><code class="language-sh">git branch -M main
</code></pre>
<pre><label>sh</label><code class="language-sh">git push -u orgin main
</code></pre>
<p>→ Ấn refresh để thấy được các file đã được upload lên github, bên trái file có phần commit là những sự thay đổi lúc nãy mình có chỉnh sửa</p>
<p>Lệnh <code>git branch</code> để giúp cho chúng ta làm việc của riêng mình mà không ảnh hưởng đến người khác </p>
<p>Lệnh <code>git branch</code> show ra một branch main, trong branch main sẽ có số commit mà chúng ta thực hiện trước đó</p>
<h4 id="để-tạo-ra-hoặc-di-chuyển-sang-một-branch-dựa-trên-branch-đang-đứng-main-">Để tạo ra hoặc di chuyển sang một branch dựa trên branch đang đứng (main) :</h4>
<pre><label>sh</label><code class="language-sh">git checkout -b "tên branch"
</code></pre>
<p>→ Trên branch mới sẽ có số commit của branch main mà đang đứng lúc nãy</p>
<p>→ Khi chúng ta chỉnh sửa một file nào đó rồi commit lại thì những sự thay đổi đó chỉ xảy ra trên branch mới tạo, còn branch main thì vẫn giữ nguyên, không có sự thay đổi nào cả</p>
<p>Khi ta dùng lệnh <code>git checkout</code> main thì nó sẽ trở lại những commit ban đầu (tức là file thay đổi sẽ quay về trạng thái cũ )</p>
<h4 id="để-đưa-những-commit-mới-nhất-từ-branch-mới-sang-cho-branch-main-thì-dùng-">Để đưa những commit mới nhất từ branch mới sang cho branch main thì dùng :</h4>
<pre><label>sh</label><code class="language-sh">git merge &lt;tên branch mới&gt;
</code></pre>
<h4 id="để-chuyển-về-trạng-thái-mà-mik-commit-thì-dùng-">Để chuyển về trạng thái mà mik commit thì dùng :</h4>
<pre><label>sh</label><code class="language-sh">git checkout &lt;tên ID của commit&gt;
</code></pre>
<h4 id="để-đẩy-những-commit-lên-github-từ-local-">Để đẩy những commit lên github từ local :</h4>
<pre><label>sh</label><code class="language-sh">git push
</code></pre>
<h4 id="khi-trên-github-ai-đó-thay-đổi-content-của-một-file-và-dưới-local-cũng-thay-đổi-thì-sử-dụng-lệnh-">Khi trên github ai đó thay đổi content của một file và dưới local cũng thay đổi thì sử dụng lệnh :</h4>
<pre><label>sh</label><code class="language-sh">git pull
</code></pre>
<p>→ lệnh này dùng để mình chọn sự thay đổi trên github hay phía local của mình</p>
<h4 id="để-ignore-những-file-không-cần-thiết">Để ignore những file không cần thiết:</h4>
<p>Create a file named <em>.gitignore</em> and type the name of unnecessary files into this file.</p>
<p>→ Khi chúng ta tiếp hành add, commit thì chỉ có file <em>.gitignore</em> chuyển sang staging area và committed, còn mấy file/folder trong <em>.gitignore</em> đều không chuyển.</p>
<p><strong>Tóm lại bất cứ sự thay đổi nào, nếu muốn đưa lên hoặc lưu sự thay đổi thì dùng add và sau đó commit</strong></p>
`


export const data = {
    summary,
    title,
    createdAt,
    modifiedAt,
    content,
}
