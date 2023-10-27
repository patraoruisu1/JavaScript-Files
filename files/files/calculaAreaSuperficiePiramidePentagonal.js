function calculaAreaSuperficiePiramidePentagonal(ladodabase, altura) {
    if(ladodabase < 0 || altura < 0){
        return 'Por favor introduza valores positivos.'
    }

   
    return (((5 * Math.tan(54*Math.PI / 180)*ladodabase**2)/4) + ((5*ladodabase)/2) * Math.sqrt(altura**2 + ((ladodabase*Math.tan(54*Math.PI / 180)/2)**2)))

}