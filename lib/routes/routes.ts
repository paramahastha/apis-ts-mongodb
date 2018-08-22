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

    // Contact detail
    app
      .route("/contact/:id")
      // get specific contact
      .get((req: Request, res: Response) => {
        // Get a single contact detail
        res.status(200).send({
          message: "GET request successfulll!!!!"
        });
      })
      .put((req: Request, res: Response) => {
        // Update a contact
        res.status(200).send({
          message: "PUT request successfulll!!!!"
        });
      })
      .delete((req: Request, res: Response) => {
        // Delete a contact
        res.status(200).send({
          message: "DELETE request successfulll!!!!"
        });
      });
  }
}
