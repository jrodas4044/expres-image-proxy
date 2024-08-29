"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfHandler = void 0;
const PdfHandler = async () => {
    try {
        // fetech image from url
        const response = await fetch("https://makito.es/WebRoot/Store/Shops/Makito/6332/E5FF/E91A/2D45/715D/0A6E/0397/B7AC/5846-000-24.jpg");
        const buffer = await response.arrayBuffer();
        const bufferArray = new Uint8Array(buffer);
        const blob = new Blob([bufferArray]);
        const url = URL.createObjectURL(blob);
        return {
            url: url,
        };
        // get image buffer
    }
    catch (err) {
        console.error(err);
        return {
            error: err,
        };
    }
};
exports.PdfHandler = PdfHandler;
exports.default = exports.PdfHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGRmSGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvUGRmSGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBTyxNQUFNLFVBQVUsR0FBRyxLQUFLLElBQUksRUFBRTtJQUNuQyxJQUFJLENBQUM7UUFDSCx3QkFBd0I7UUFDeEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQzFCLHNHQUFzRyxDQUN2RyxDQUFDO1FBRUYsTUFBTSxNQUFNLEdBQUcsTUFBTSxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUMsTUFBTSxXQUFXLEdBQUcsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsT0FBTztZQUNMLEdBQUcsRUFBRSxHQUFHO1NBQ1QsQ0FBQztRQUNGLG1CQUFtQjtJQUNyQixDQUFDO0lBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsT0FBTztZQUNMLEtBQUssRUFBRSxHQUFHO1NBQ1gsQ0FBQztJQUNKLENBQUM7QUFDSCxDQUFDLENBQUM7QUFyQlcsUUFBQSxVQUFVLGNBcUJyQjtBQUVGLGtCQUFlLGtCQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgUGRmSGFuZGxlciA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICAvLyBmZXRlY2ggaW1hZ2UgZnJvbSB1cmxcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgXCJodHRwczovL21ha2l0by5lcy9XZWJSb290L1N0b3JlL1Nob3BzL01ha2l0by82MzMyL0U1RkYvRTkxQS8yRDQ1LzcxNUQvMEE2RS8wMzk3L0I3QUMvNTg0Ni0wMDAtMjQuanBnXCJcbiAgICApO1xuXG4gICAgY29uc3QgYnVmZmVyID0gYXdhaXQgcmVzcG9uc2UuYXJyYXlCdWZmZXIoKTtcbiAgICBjb25zdCBidWZmZXJBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtidWZmZXJBcnJheV0pO1xuICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVybDogdXJsLFxuICAgIH07XG4gICAgLy8gZ2V0IGltYWdlIGJ1ZmZlclxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiBlcnIsXG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGRmSGFuZGxlcjtcbiJdfQ==