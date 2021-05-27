class drops{
    constructor(){
        this.x;
        this.y=10;
        this.velocity=0;
        this.radius= random(15,75);
        this.elasticity=0.6;
    }

    det_coll(_oth){
        if(((this.x-_oth.x)**2 + (this.y-_oth.y)**2)<=this.radius+_oth.radius) return true;
        else return false;
    }

    update(){
        if(this.y+this.velocity+this.radius<windowHeight-100 && this.y+this.velocity+this.radius>0)this.y = this.y+this.velocity;
        else {this.y=this.y-this.velocity;this.velocity = -this.velocity*this.elasticity;}
        this.velocity = this.velocity+grav;
    }
}