$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("Snippets", "Snippets");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "Snippets";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp1 = new PgComponentType('comp1', 'Accordion');
        comp_comp1.code = '<div class="ui styled accordion" data-pg-collapsed>  <div class="title">    <i class="dropdown icon"></i>    Level 1  </div>  <div class="content">    Welcome to level 1</div></div>';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);
        
        var comp_comp2 = new PgComponentType('comp2', 'Dropdown');
        comp_comp2.code = '<select name="gender" class="ui dropdown" id="select">  <option value="">Gender</option>  <option value="male">Male</option>  <option value="female">Female</option></select>';
        comp_comp2.parent_selector = null;
        f.addComponentType(comp_comp2);
        
        var comp_comp3 = new PgComponentType('comp3', 'Tabs');
        comp_comp3.code = '<div class="tabs" data-pg-collapsed>  <div class="ui top attached tabular menu" data-pg-collapsed><a class="item active" data-tab="first">First</a><a class="item" data-tab="second">Second</a><a class="item" data-tab="third">Third</a>  </div>  <div class="ui bottom attached tab segment active" data-tab="first">    First</div>  <div class="ui bottom attached tab segment" data-tab="second">    Second</div>  <div class="ui bottom attached tab segment" data-tab="third">    Third</div></div>';
        comp_comp3.parent_selector = null;
        f.addComponentType(comp_comp3);
        
        var comp_comp4 = new PgComponentType('comp4', 'Modal');
        comp_comp4.code = '<div class="ui modal">  <i class="close icon"></i>  <div class="header">Modal Title</div>  <div class="content">    <p>Lorem ipsum dolor sit amet.</p>  </div>  <div class="actions">    <div class="ui button">Cancel</div>    <div class="ui button">OK</div>  </div></div>';
        comp_comp4.parent_selector = null;
        f.addComponentType(comp_comp4);
        
        var comp_comp5 = new PgComponentType('comp5', 'Swiper');
        comp_comp5.code = '<div class="swiper" data-pg-collapsed>   <div class="swiper-wrapper">     <div class="swiper-slide">Slide 1</div>         <div class="swiper-slide">Slide 2</div>         <div class="swiper-slide">Slide 3</div>       </div>     <div class="swiper-pagination"></div>     <div class="swiper-button-prev"></div>     <div class="swiper-button-next"></div>     <div class="swiper-scrollbar"></div>   </div>';
        comp_comp5.parent_selector = null;
        f.addComponentType(comp_comp5);
        
        var comp_comp6 = new PgComponentType('comp6', 'Picture (avif, webp, img)');
        comp_comp6.code = '<picture>\
  <source srcset="img/cover.avif" type="image/avif"/>\
  <source srcset="img/cover.webp" type="image/webp"/>\
  <img loading="lazy" src="img/cover.jpg" class="image" width="300" height="300" alt="image description"/>\
</picture>';
        comp_comp6.parent_selector = null;
        f.addComponentType(comp_comp6);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("Snippets_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp1, comp_comp2, comp_comp3, comp_comp4, comp_comp5, comp_comp6]);

        f.addLibSection(section);
   });
});