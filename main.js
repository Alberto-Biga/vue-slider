var app = new Vue(
    {
        el: '#root',
        data:{
            photos:[
                'https://source.unsplash.com/random/?fruit',
                'https://source.unsplash.com/random/?city',
                'https://source.unsplash.com/random/?shoes',
            ],
            photoCounter: 0
        },
        methods:{
            nextPhoto: function(){
                console.log(this.photoCounter);
                this.photoCounter += 1;
                if(this.photoCounter > (this.photos.length - 1)){
                    this.photoCounter = 0;
                }
            },
            prevPhoto:function(){
                console.log(this.photoCounter);
                this.photoCounter -= 1;
                if(this.photoCounter < 0){
                    this.photoCounter = this.photos.length - 1 ;
                }
            }
        }
    }
);