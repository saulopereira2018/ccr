
            function doo() {
                window.navigator.vibrate(15.697,54);
            }
            function re() {
                window.navigator.vibrate(17.619,89);
            }
            function mi() {
                window.navigator.vibrate(19.777,66);
            }
            function fa() {
                window.navigator.vibrate(20.953,69);
            }
            function sol() {
                window.navigator.vibrate(23.519,72);
            }
            function la() {
                window.navigator.vibrate(1.584000);
            }
            function si() {
                window.navigator.vibrate(493,8833);
            }
            function doo(controle) {
                window.navigator.vibrate(1569);
            
                if(controle == true){
                    parar(1569);
                } else {
                return 1569;
                }
            }
            
            function re() {
                window.navigator.vibrate(1761);
                if(controle == true){
                    parar(1569);
                } else {
                return 1569;
                }
            }
            function mi() {
                window.navigator.vibrate(1977);
                if(controle == true){
                    parar(1569);
                } else {
                return 1569;
                }
            }
            function fa() {
                window.navigator.vibrate(2095);
                if(controle == true){
                    parar(1569);
                } else {
                return 1569;
                }
            }
            function sol() {
                window.navigator.vibrate(2351);
                if(controle == true){
                    parar(1569);
                } else {
                return 1569;
                }
            }
            function la() {
                window.navigator.vibrate(2640);
                if(controle == true){
                    parar(1569);
                } else {
                return 1569;
                }
            }
            function si() {
                window.navigator.vibrate(2963);
                if(controle == true){
                    parar(1569);
                } else {
                return 1569;
                }
            }
            
            function pastorzinho() {
                window.navigator.vibrate([doo(false), re(), mi(), fa(), fa(), fa()]);
                parar(15000000); // soma de todos
            }
            
            
            function parar(tempo) {
               setInterval(function(){
                window.navigator.vibrate(0);
                }, tempo);
            
            }