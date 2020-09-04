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
        @media(max-height:1200px) and (min-height:700px){
            .abvwweq7{
                width:1200px!important;
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
        .rirtxc74{
            max-width: 100px !important;
        }
        .rirtxc74:hover{
            max-width: 250px !important;
        }
        .fer614ym{
            min-width: 100px!important;
        }
        .fer614ym:hover{
            min-width: 200px!important;
        }
        .o387gat7{
            flex-basis: 100px !important;
        }
        .o387gat7:hover{
            flex-basis: 250px !important;
        }
        span._8y72._18vi{
            width: 100px;
        }
        span._8y72._18vi:hover{
            width: 200px;
        }
        .oajrlxb2.bp9cbjyn.g5ia77u1.mtkw9kbi.tlpljxtp.qensuy8j.ppp5ayq2.goun2846.ccm00jje.s44p3ltw.mk2mc5f4.rt8b4zig.n8ej3o3l.agehan2d.sk4xxmp2.rq0escxv.nhd2j8a9.j83agx80.mg4g778l.btwxx1t3.pfnyh3mw.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.tgvbjcpo.hpfvmrgz.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.l9j0dhe7.i1ao9s8h.esuyzwwr.f1sip0of.du4w35lb.lzcic4wl.abiwlrkh.p8dawk7l.buofh1pr.k7cz35w2.taijpn5t.ms05siws.flx89l3n.ogy3fsii{
            width: 200px;
        }
        .q5bimw55.rpm2j7zs.k7i0oixp.gvuykj2m.j83agx80.cbu4d94t.ni8dbmo4.eg9m0zos.l9j0dhe7.du4w35lb.ofs802cu.pohlnb88.dkue75c7.mb9wzai9.d8ncny3e.buofh1pr.g5gj957u.tgvbjcpo.l56l04vs.r57mb794.kh7kg01d.c3g1iek1.k4xni2cv{
            -webkit-animation-name: fadeOut;
            -webkit-animation-duration: 0.25s;
            opacity:0;
        }
        .q5bimw55.rpm2j7zs.k7i0oixp.gvuykj2m.j83agx80.cbu4d94t.ni8dbmo4.eg9m0zos.l9j0dhe7.du4w35lb.ofs802cu.pohlnb88.dkue75c7.mb9wzai9.d8ncny3e.buofh1pr.g5gj957u.tgvbjcpo.l56l04vs.r57mb794.kh7kg01d.c3g1iek1.k4xni2cv:hover{
            -webkit-animation-name: fadeIn;
            -webkit-animation-duration: 0.25s;
            opacity:1;
        }
        @-webkit-keyframes fadeIn { 
            0% { opacity: 0; }
            20% { opacity: 0.2; }
            40% { opacity: 0.4; }
            60% { opacity: 0.6; }
            80% { opacity: 0.8; }
            100% { opacity: 1; }
        }
        @-webkit-keyframes fadeOut { 
            0% { opacity: 1; }
            20% { opacity: 0.8; }
            40% { opacity: 0.6; }
            60% { opacity: 0.4; }
            80% { opacity: 0.2; }
            100% { opacity: 0; }
        }
        `
        ;
    document.head.appendChild(style); 
    /*remove ad*/
    document.getElementsByClassName("sponsored_ad")[0].remove();
    document.getElementsByClassName("ue3kfks5")[1].remove();
    document.getElementById("rightCol").remove();
    console.log("done");
    console.log(document.getElementById("jsc_c_" + "$'").click())
});