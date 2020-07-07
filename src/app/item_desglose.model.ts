export class Item_desglose{
    private desglose_id_interno:string;
    private listas_id:string;
    private codigo_qr:string;
    private codigo:string;
    private descripcion:string;
    private cantidad:string;
    private largo:string;
    private espesor:string;

    constructor(desglose_id_interno:string,listas_id:string,codigo_qr:string,codigo:string,descripcion:string,cantidad:string,largo:string,espesor:string){
        this.desglose_id_interno = desglose_id_interno;
        this.listas_id = listas_id;
        this.codigo_qr =codigo_qr;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.largo = largo;
        this.espesor = espesor;
    }
}

