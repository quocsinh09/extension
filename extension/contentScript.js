chrome.storage.sync.get(null, function (result) {
    var style = document.createElement('style');
    console.log('data', result);
    if (result.msg_blur) {
        var style = document.createElement('style');
        style.innerHTML = `
        .messagesContent,._6zk9,._58nk,._5yl5{
            -webkit-filter:blur(3px);
            filter:blur(3px);
        }
        .messagesContent:hover,._6zk9:hover,._58nk:hover,._5yl5:hover{
            -webkit-filter:blur(0px);
            filter:blur(0px);
        }
        ._23_m{
            filter:blur(3px)!important;
        }
        /*chatblur:mess-name*/
        div.oygrvhab.kvgmc6g5.hcukyx3x.cxmmr5t8.c1et5uql,.oo9gr5id.ni8dbmo4.g0qnabr5.ekzkrbhg{
            -webkit-filter:blur(5px);
            filter:blur(5px);
        }
        div.oygrvhab.kvgmc6g5.hcukyx3x.cxmmr5t8.c1et5uql:hover,.oo9gr5id.ni8dbmo4.g0qnabr5.ekzkrbhg:hover{
            -webkit-filter:blur(0px);
            filter:blur(0px);
        }
        /*chat:rep*/
        .osnr6wyh.jm1wdb64.e9vueds3,.sq6gx45u.pipptul6.b3onmgus{
            -webkit-filter:blur(5px);
            filter:blur(5px);
        }
        .osnr6wyh.jm1wdb64.e9vueds3:hover,.sq6gx45u.pipptul6.b3onmgus:hover{
            -webkit-filter:blur(0px);
            filter:blur(0px);
        }
        ._5rpu[contenteditable="true"]{
            -webkit-filter:blur(5px);
            filter:blur(5px);
        }
        ._5rpu[contenteditable="true"]:hover{
            -webkit-filter:blur(0px);
            filter:blur(0px);
        }
        /*redocmt*/
        div.oygrvhab.kvgmc6g5.ii04i59q.hcukyx3x.cxmmr5t8{
            -webkit-filter:blur(0px);
            filter:blur(0px)!important;
        }
        /*chatblur:ur-me-name.ii04i59q.g5ia77u1,.stjgntxs.ni8dbmo4.ii04i59q,.oo9gr5id.ni8dbmo4.g0qnabr5.ekzkrbhg{
            -webkit-filter:blur(5px);
            filter:blur(5px);
        }
        .ii04i59q.g5ia77u1:hover,.stjgntxs.ni8dbmo4.ii04i59q:hover,.oo9gr5id.ni8dbmo4.g0qnabr5.ekzkrbhg:hover{
            -webkit-filter:blur(0px);
            filter:blur(0px);
        }*/`;
        document.head.appendChild(style)
    }
    if (result.img_blur) {
        var style = document.createElement('style');
        style.innerHTML = `
        /*img-nf*/
        .pmk7jnqg.n7fi1qx3.kr520xx4{
            -webkit-filter:blur(10px);
            filter:blur(10px);
            opacity:0.1!important;
        }
        .pmk7jnqg.n7fi1qx3.kr520xx4:hover{
            -webkit-filter:blur(0px);
            filter:blur(0px);
            opacity:1!important;
        }
        `;
        document.head.appendChild(style)
    }
    if (result.chat_black) {
        var style = document.createElement('style');
        style.innerHTML = `
            /*chatcolor*/
            .tw6a2znq.stjgntxs.sj5x9vvc.qv66sw1b{
                background-color:black!important;
            }
            /*chat-color-inmess*/
            ._3059._ui9._hh7._6ybn._52mr._43by{
                background-color:black!important;
            }
            ._nd_._hh7{
                background-color:red!important;
            }
            a:visited{
                color:rgb(50, 150, 200)!important;
            }`;
        document.head.appendChild(style)
    }
    if (result.avt_chat) {
        var style = document.createElement('style');
        style.innerHTML = `/*avt chat*/
        img.k4urcfbm.datstx6m.s45kfl79.emlxlaya.bkmhp75w.spb7xbtv.pzggbiyp.bixrwtb6{
            -webkit-filter:blur(5px);
            filter:blur(5px);
        }
        img.k4urcfbm.datstx6m.s45kfl79.emlxlaya.bkmhp75w.spb7xbtv.pzggbiyp.bixrwtb6:hover{
            -webkit-filter:blur(0px);
            filter:blur(0px);
        }
        /*avt all*/
        .tvfksri0.nqmvxvec.bi6gxh9e{
            -webkit-filter:blur(5px);
            filter:blur(5px);
        }
        .tvfksri0.nqmvxvec.bi6gxh9e:hover{
            -webkit-filter:blur(0px);
            filter:blur(0px);
        }
        .ni8dbmo4.stjgntxs.g0qnabr5.ltmttdrg.ekzkrbhg.mdldhsdk.oo9gr5id{
            -webkit-filter:blur(5px);
            filter:blur(5px);
        }
        .ni8dbmo4.stjgntxs.g0qnabr5.ltmttdrg.ekzkrbhg.mdldhsdk.oo9gr5id:hover{
            -webkit-filter:blur(0px);
            filter:blur(0px);
        }
        `;
        document.head.appendChild(style)
    } /*full nf*/
    style.innerHTML = `
        @media(max-height:1000px) and (min-height:700px){
            .abvwweq7{
                width:1000px!important;
            }
        }
        .e3xpq0al,.oh7imozk{
            width:150%;
        }
        .fjf4s8hc{
            padding-left:0px!important;
        }
        @media(min-height:790px).ejjq64ki.ejjq64ki{
            width:100%;
        }
        .d2edcug0.e3xpq0al.v8c10jal.ejjq64ki{
            width:100%!important;
        }
        .f7vcsfb0{
            padding-right:0px!important;
        }
        .aodizinl{
            padding-top:10px!important;
        }
        .tn7ubyq0{
            width:100%;
        }
        .k4urcfbm .aahdfvyu{
            max-width: 1200px !important;
        }

        /*2 thanh 2 ben */
        .fer614ym{
            min-width: 250px!important;
        }
        .o387gat7{
            flex-basis: 250px !important;
        }
        /*      2 side bar      */
        .rq0escxv.l9j0dhe7.du4w35lb.j83agx80.cbu4d94t.qowsmv63.dp1hu0rb{
            -webkit-animation-name: fadeOut;
            -webkit-animation-duration: 0.2s;
            opacity:0;
        }
        .rq0escxv.l9j0dhe7.du4w35lb.j83agx80.cbu4d94t.qowsmv63.dp1hu0rb:hover{
            -webkit-animation-name: fadeIn;
            -webkit-animation-duration: 0.2s;
            opacity:1;
        }
        .rq0escxv.l9j0dhe7.tkr6xdv7.j83agx80.cbu4d94t.pfnyh3mw.d2edcug0.hpfvmrgz.dp1hu0rb.rek2kq2y.o36gj0jk.ahb00how{
            width :100px !important;
            -webkit-animation-name: fadeOut;
            -webkit-animation-duration: 0.2s;
            opacity:0;
        }
        .rq0escxv.l9j0dhe7.tkr6xdv7.j83agx80.cbu4d94t.pfnyh3mw.d2edcug0.hpfvmrgz.dp1hu0rb.rek2kq2y.o36gj0jk.ahb00how:hover{
            width:300px !important;
            -webkit-animation-name: fadeIn;
            -webkit-animation-duration: 0.2s;
            opacity:1;
        }

        /*      top bar     */
        .kr520xx4.j9ispegn.poy2od1o.n7fi1qx3.tkr6xdv7{
            -webkit-animation-name: fadeOut;
            -webkit-animation-duration: 0.2s;
            opacity:0;
        }
        .kr520xx4.j9ispegn.poy2od1o.n7fi1qx3.tkr6xdv7:hover{
            -webkit-animation-name: fadeIn;
            -webkit-animation-duration: 0.1s;
            opacity:1;
        }

        /*      name        */
        .bp9cbjyn.j83agx80.datstx6m.taijpn5t.oi9244e8.d74ut37n{
            -webkit-animation-name: fadeOut;
            -webkit-animation-duration: 0.2s;
            opacity:0;
        }
        .bp9cbjyn.j83agx80.datstx6m.taijpn5t.oi9244e8.d74ut37n:hover{
            -webkit-animation-name: fadeIn;
            -webkit-animation-duration: 0.1s;
            opacity:1;
        }

        /*      search bar      */
        label.rq0escxv.a8c37x1j.a5nuqjux.l9j0dhe7.k4urcfbm{
            width:200px;
        }
        @-webkit-keyframes fadeIn { 
            0% { opacity: 0; }
            10% { opacity: 0.1; }
            20% { opacity: 0.2; }
            30% { opacity: 0.3; }
            40% { opacity: 0.4; }
            50% { opacity: 0.5; }
            60% { opacity: 0.6; }
            70% { opacity: 0.7; }
            80% { opacity: 0.8; }
            90% { opacity: 0.9; }
            100% { opacity: 1; }
        }
        @-webkit-keyframes fadeOut { 
            0% { opacity: 1; }
            10% { opacity: 0.9; }
            20% { opacity: 0.8; }
            30% { opacity: 0.7; }
            40% { opacity: 0.6; }
            50% { opacity: 0.5; }
            60% { opacity: 0.4; }
            70% { opacity: 0.3; }
            80% { opacity: 0.2; }
            90% { opacity: 0.1; }
            100% { opacity: 0; }
        }
        `
        ;
    document.head.appendChild(style); 
    /*remove ad*/
    document.getElementsByClassName("sponsored_ad")[0].remove();
    document.getElementsByClassName("ue3kfks5")[1].remove();
});