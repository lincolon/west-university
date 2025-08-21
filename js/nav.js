(function () { 
    document.addEventListener('DOMContentLoaded', navLoader);

    function navLoader() { 
        var navs = document.querySelectorAll('.nav-container');
        navs.forEach(function(nav){ 
            // 新增移入移除事件，显示nav相邻的ul，ul默认display:none
            nav.addEventListener('mouseenter', function(){
                var subNavs = this.querySelector('ul');
                if(subNavs){
                    subNavs.style.display = 'block';
                }
            });
            nav.addEventListener('mouseleave', function(){
                var subNavs = this.querySelector('ul');
                if(subNavs){
                    this.querySelector('ul').style.display = 'none';
                }
            });
        });
    }
})(); 