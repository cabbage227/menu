<html >
<head>
<meta charset="UTF-8">
<title>Sign Up Login</title>
<link rel="stylesheet" href="css/lodin.css">
<script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
</head>

<body>

<div class="cotn_principal">
  <div class="cont_centrar">
    <div class="cont_login">
      <div class="cont_info_log_sign_up">
        <div class="col_md_login">
          <div class="cont_ba_opcitiy">
            <h2>LOGIN</h2>
            <p>欢迎登陆你的随身小厨房后台管理系统</p>
         
            <div class="link mission-link">
             <a class="btn_login" id="homeP" onclick="cambiar_login()" >
              <span class="line line-top"></span>
              <span class="line line-right"></span>
              <span class="line line-bottom"></span>
              <span class="line line-left"></span>
              登录
             </a>
            </div>
            <div class="link mission-link">
             <a href="main.php" class="btn_login" id="homeP">
              <span class="line line-top"></span>
              <span class="line line-right"></span>
              <span class="line line-bottom"></span>
              <span class="line line-left"></span>
              返回
             </a>
            </div>
          </div>
        </div>
      </div>
      <div class="cont_back_info">
        <div class="cont_img_back_grey"> <img src="images/3.jpg" alt="" /> </div>
      </div>
      <div class="cont_forms" >
        <div class="cont_img_back_"> <img src="images/3.jpg" alt="" /> </div>
        <form id="lodD" action="requst.php" method="post"  class="cont_form_login">   
            <a href="#" onclick="ocultar_login_sign_up()" >
              <i class="material-icons">×</i>
            </a>
            <h2>LOGIN</h2>
            <input type="text" name="username" id="name" placeholder="用户名" />
            <input type="password" name="pwd" id="pwd" placeholder="Password" />
            <input type="submit" id="submit"  onclick="cambiar_login()" value="登录" />
        </form>
      </div>
    </div>
  </div>
</div>
<script src="js/loadin.js"></script>
</body>
</html>
