import { Request, Response } from "express";
import { ContactController } from "../controllers/contactController";

export class Routes {
  public contactController: ContactController = new ContactController();

  public routes(app: any): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({
        message: "Ok"
      });
    });

    // Contact
    // Get All Contacts (GET)
    app.route("/contacts").get(this.contactController.get_all);

    // Create Contact (POST)
    app.route("/contact").post(this.contactController.create);

    app.route("/contact/:id")
      // Get By Id Contact (GET)
      .get(this.contactController.get_by_id)
      // Update By Id Contact (PUT)
      .put(this.contactController.update)
      // Delete By Id Contact (DELETE)
      .delete(this.contactController.delete);
  }
}
