
    module.exports = function (app) {
        const modelName = "student";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            nameyhhjd: { type:  String , required: true, comment: "Nameyhhjd, p, false, true, true, true, true, true, true, , , , ," },
Image: { type:  [Schema.Types.ObjectId], ref: "document_storages" , required: true, comment: "Image, file_upload, false, true, true, true, true, true, true, , , , ," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };