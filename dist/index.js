"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 8080;
app.get("/", async (req, res) => {
    // url blobl
    const url = req.query.url;
    if (!url) {
        res.send("Please provide url");
        return;
    }
    // make image for download in jpg from  url blob
    try {
        const image = await fetch(url);
        const arrayBuffer = await image.arrayBuffer();
        // convert buffer to blob
        const buffer = Buffer.from(arrayBuffer);
        // set headers
        res.setHeader("Content-Type", "image/jpeg");
        res.setHeader("Content-Disposition", "attachment; filename=download.jpg");
        res.send(buffer);
    }
    catch (err) {
        console.error(err);
        res.send("Error");
    }
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBcUQ7QUFFckQsTUFBTSxHQUFHLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUM7QUFDdEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBRWxCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDakQsWUFBWTtJQUNaLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBYSxDQUFDO0lBQ3BDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNULEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUMvQixPQUFPO0lBQ1QsQ0FBQztJQUNELGdEQUFnRDtJQUNoRCxJQUFJLENBQUM7UUFDSCxNQUFNLEtBQUssR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixNQUFNLFdBQVcsR0FBRyxNQUFNLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5Qyx5QkFBeUI7UUFDekIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QyxjQUFjO1FBQ2QsR0FBRyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDNUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO1FBRTFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDYixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEIsQ0FBQztBQUNILENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUNBQXlDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDL0QsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcywgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gXCJleHByZXNzXCI7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmNvbnN0IHBvcnQgPSA4MDgwO1xuXG5hcHAuZ2V0KFwiL1wiLCBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIC8vIHVybCBibG9ibFxuICBjb25zdCB1cmwgPSByZXEucXVlcnkudXJsIGFzIHN0cmluZztcbiAgaWYgKCF1cmwpIHtcbiAgICByZXMuc2VuZChcIlBsZWFzZSBwcm92aWRlIHVybFwiKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gbWFrZSBpbWFnZSBmb3IgZG93bmxvYWQgaW4ganBnIGZyb20gIHVybCBibG9iXG4gIHRyeSB7XG4gICAgY29uc3QgaW1hZ2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgaW1hZ2UuYXJyYXlCdWZmZXIoKTtcbiAgICAvLyBjb252ZXJ0IGJ1ZmZlciB0byBibG9iXG4gICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oYXJyYXlCdWZmZXIpO1xuICAgIC8vIHNldCBoZWFkZXJzXG4gICAgcmVzLnNldEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImltYWdlL2pwZWdcIik7XG4gICAgcmVzLnNldEhlYWRlcihcIkNvbnRlbnQtRGlzcG9zaXRpb25cIiwgXCJhdHRhY2htZW50OyBmaWxlbmFtZT1kb3dubG9hZC5qcGdcIik7XG5cbiAgICByZXMuc2VuZChidWZmZXIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgcmVzLnNlbmQoXCJFcnJvclwiKTtcbiAgfVxufSk7XG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgU2VydmVyIGlzIHJ1bm5pbmcgYXQgaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9YCk7XG59KTtcbiJdfQ==