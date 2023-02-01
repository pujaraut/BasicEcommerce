export class OrderItem {
    id: number | undefined;
    quantity!: number;
    unitPrice: number | undefined ;
    productId: number | undefined;
    productCategory: string | undefined;
    productSize: string | undefined;
    productTitle: string | undefined;
    productArtist: string | undefined;
    productArtId: string | undefined;
}

export class Order {
    items: OrderItem[]=[];
    orderId: number | undefined;
    orderDate: Date=new Date(); 
    orderNumber: string | undefined=Math.random().toString(36).substr(2,5);


    get subtotal(): number
    {

        const result = this.items.reduce(
            (tot, val) => {
                return tot + ((val.unitPrice ?? 0) * val.quantity);

        }, 0);

        return result;
    }

}