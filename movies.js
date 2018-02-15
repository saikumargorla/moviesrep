const fs = require('fs');

let rawdata = fs.readFileSync('movies.json');  
let movies = JSON.parse(rawdata);  
console.log(movies);

 JSONArray jsonArray;// this is your array containing data
    for(int i=0;i<jsonArray.length();i++)
    {
        try {
            JSONObject jobj=jsonArray.getJSONObject(i);

            int id=jobj.getInt("id");
            String stdname,dept;
            if(id== 1)  // compare your id here
            {
                stdname=jobj.getString("name");
                dept=jobj.getString("Rating");
            }


        } catch (JSONException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }