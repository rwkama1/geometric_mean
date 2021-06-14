class Geometric_Mean
{
    constructor(pn1,pn2,pn3)
    {
        this.n1=pn1;
        this.n2=pn2;
        this.n3=pn3;
    }
    calculate=()=>
    {
      let multnumber=0,result=0;
       if(this.n1>0&&this.n2>0&&this.n3>0)
       {
        multnumber=(this.n1*this.n2*this.n3);
        result=Math.pow(multnumber,1/3)
        return result;
       }
       else
       {
           return false;
       }
    }
   
}
module.exports={Geometric_Mean}