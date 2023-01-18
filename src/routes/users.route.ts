import { NextFunction, Request, Response, Router } from 'express';

const userRoute = Router();

userRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const user = [{ userName: "Andre" }]
    res.status(200).send(user)
});

userRoute.get("/users/:uuid", (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(200).send({ uuid });
});

userRoute.post("/users", (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    res.status(200).json(newUser);
});

userRoute.put("/users/:uuid", (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(200).send({ uuid });
});

userRoute.delete("/users/:uuid", (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(200).send({ uuid });
});

export default userRoute;