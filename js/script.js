$(function(){

    // 스킬박스
    var canv = $('#canvas')[0].getContext('2d');


    //각도
    var deg1 = 0;
    var deg2 = 0;
    var deg3 = 0;
    var deg4 = 0;



    //퍼센트
    var per1 = 0;
    var per2 = 0;
    var per3 = 0;
    var per4 = 0;


    //스킬레벨
    var skill1 = 0;
    var skill2 = 0;
    var skill3 = 0;
    var skill4 = 0;


    var timer = setInterval( canv_ani, 1000/60 );

    function canv_ani(){

        //감속애니
        // 현재값 += 속도*(도착값-현재값);

        //각도값
        deg1 += 0.05*( (2*0.81)-deg1 );
        deg2 += 0.05*( (2*0.71)-deg2 );
        deg3 += 0.05*( (2*0.76)-deg3 );
        deg4 += 0.05*( (2*0.61)-deg4 );


        //퍼센트
        per1 = Math.floor(skill1);
        per2 = Math.floor(skill2);
        per3 = Math.floor(skill3);
        per4 = Math.floor(skill4);


        //스킬레벨값
        skill1 += 0.02*(81- skill1 );
        skill2 += 0.02*(71- skill2 );
        skill3 += 0.02*(76- skill3 );
        skill4 += 0.02*(61- skill4 );


        

        //캔버스영역을 지움
        canv.clearRect(0,0, 1000, 400);

        //바깥쪽원 테두리 그리기

        canv.lineWidth = '2'; //테두리 굵기

        //첫번째 원의 속성지정
        canv.strokeStyle = '#7A84B7';
        canv.beginPath();
        canv.arc( 100, 200, 80, 0, Math.PI*2, false);
        canv.stroke();

        //두번째 원의 속성지정
        canv.strokeStyle = '#B27AB7';
        canv.beginPath();
        canv.arc( 300, 200, 80, 0, Math.PI*2, false);
        canv.stroke();

        //세번째 원의 속성지정
        canv.strokeStyle = '#B6B77A';
        canv.beginPath();
        canv.arc( 500, 200, 80, 0, Math.PI*2, false);
        canv.stroke();

        //네번째 원의 속성지정
        canv.strokeStyle = '#7AB7A8';
        canv.beginPath();
        canv.arc( 700, 200, 80, 0, Math.PI*2, false);
        canv.stroke();

   
   




        //안쪽원그리기
        canv.lineWidth ='10';

        canv.strokeStyle = '#7A84B7';
        canv.beginPath();
        canv.arc( 100, 200, 70, Math.PI*deg1-1.5, Math.PI*1.5, true);
        canv.stroke();

        canv.strokeStyle = '#B27AB7';
        canv.beginPath();
        canv.arc( 300, 200, 70, Math.PI*deg2-1.5, Math.PI*1.5, true);
        canv.stroke();

        canv.strokeStyle = '#B6B77A';
        canv.beginPath();
        canv.arc( 500, 200, 70, Math.PI*deg3-1.5, Math.PI*1.5, true);
        canv.stroke();

        canv.strokeStyle = '#7AB7A8';
        canv.beginPath();
        canv.arc( 700, 200, 70, Math.PI*deg4-1.5, Math.PI*1.5, true);
        canv.stroke();


        


        //퍼센트 출력

        canv.font= '40px Impact';
        canv.fillStyle = '#7A84B7';
        canv.fillText( per1+ '%',  75, 220);

        canv.font= '40px Impact';
        canv.fillStyle = '#B27AB7';
        canv.fillText( per2+ '%',  275, 220);

        canv.font= '40px Impact';
        canv.fillStyle = '#B6B77A';
        canv.fillText( per3+ '%',  475, 220);

        canv.font= '40px Impact';
        canv.fillStyle = '#7AB7A8';
        canv.fillText( per4+ '%',  675, 220);

 


        //원아래 텍스트출력

        canv.font= '40px Impact';
        canv.fillStyle = '#7A84B7';
        canv.fillText(  'Photoshop',  10, 350);

        canv.font= '40px Impact';
        canv.fillStyle = '#B27AB7';
        canv.fillText( 'illustrator',  220, 350);

        canv.font= '40px Impact';
        canv.fillStyle = '#B6B77A';
        canv.fillText( 'Html/CSS3',  420, 350);

        canv.font= '40px Impact';
        canv.fillStyle = '#7AB7A8';
        canv.fillText( 'JQuery', 650, 350);




    }

    // 스와이퍼

    var swiper = new Swiper('.swiper-container', {
      loop:true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints:{
          1024:{
            slidesPerView: 1,
            slidesPerGroups:1,
            // spaceBetween: 20,
          },
    
          960:{
            slidesPerView: 1,
            slidesPerGroups:1,
            // spaceBetween: 20,
          },
          768:{
            slidesPerView: 1,
            slidesPerGroups:1,
            // spaceBetween: 20,
          }
        }
      });

      // aos 애니메이션
      AOS.init();



      // 마우스 휠 부드럽게

      class Scrooth {
        constructor({element = window, strength=10, acceleration = 1.2,deceleration = 0.955}={}) {
          this.element = element;
          this.distance = strength;
          this.acceleration = acceleration;
          this.deceleration = deceleration;
          this.running = false;
      
          this.element.addEventListener('wheel', this.scrollHandler.bind(this), {passive: false});
          this.element.addEventListener('mousewheel', this.scrollHandler.bind(this), {passive: false});
          this.scroll = this.scroll.bind(this);
        }
      
        scrollHandler(e) {
          e.preventDefault();
      
          if (!this.running) {
            this.top = this.element.pageYOffset || this.element.scrollTop || 0;
            this.running = true;
            this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
            this.isDistanceAsc = true;
            this.scroll();
          } else {
            this.isDistanceAsc = false;
            this.currentDistance = e.deltaY > 0 ? this.distance : -this.distance;
          }
        }
      
        scroll() {
          if (this.running) {
            this.currentDistance *= this.isDistanceAsc === true ? this.acceleration : this.deceleration;
            Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false ? this.running = false : 1;
            Math.abs(this.currentDistance) >= Math.abs(this.distance) ? this.isDistanceAsc = false : 1;
      
            this.top += this.currentDistance;
            this.element.scrollTo(0, this.top);
            
            requestAnimationFrame(this.scroll);
          }
        }
      }
      
      const scroll = new Scrooth({
        element: window,
        strength: 20,
        acceleration: 1.5,
        deceleration: 0.975,
      });

});