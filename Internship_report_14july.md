Master Geo-Information Science  
>Visualizations have the potential to greatly improve search and discovery for online collections, transforming how users interact with digital collections. Furthermore, changing technology is making it easier than ever to incorporate visualizations into search interfaces and websites. The time is ripe for cultural heritage institutions to begin experimenting with data visualization in earnest.





    code node api zooi js . 


      -- Create line geometry
      (SELECT ST_Transform(ST_GeomFromText($1 , 4326), 28992) AS geom),

The line is then cut into parts of 10 meter and points are generated with its percentage location along the line. 
<p class="code"> Point and percentage at every 10 m along the line</p>
    linemesure AS
      (SELECT ST_AddMeasure(line.geom, 0, ST_Length(line.geom)) as linem,
      generate_series(0, ST_Length(line.geom)::int, 10) as i
      FROM line),
    
    points2d AS
      (SELECT ST_GeometryN(ST_LocateAlong(linem, i), 1) AS geom, (i*100/ST_Length(linem)) as percentage
      FROM linemesure),

This array of points is intersected with the  AHN table to ext rat the height value for every point. 
<p class="code"> Get height per point</p>
    AHN AS
    -- Get DEM elevation for each
      (SELECT p.geom AS geom, ST_Value(ahn.rast, 1, p.geom) AS heights, percentage
      FROM ahn, points2d p
      WHERE ST_Intersects(ahn.rast, p.geom)),

Also the points are intersected with the field names table to see if a points falls into a field, and wchih name and category code it belongs to. 
<p class="code">  Get field name for intersecting points</p>
    fields AS
        (SELECT naam AS naam, code_1_ AS category1, code_2 AS category2, ST_Intersection(p.geom, veldnamen2.geom) AS geoms
            	FROM veldnamen2, points2d p 
            	WHERE ST_Intersects(veldnamen2.geom, p.geom)),
            	
Then the points are intersected with the water topology table to see if a points falls into a water body, and wich name and category code it belongs to. 

<p class="code">  Get field name for intersecting points</p>

    --Get Water inersects
    waters As
    (SELECT naamnl AS waternaam, typewater AS typewater, identifica AS waterId, ST_Intersection(p.geom, water.geom) AS geomz
    FROM water, points2d p
    WHERE ST_Intersects(water.geom, p.geom)),

In the end all point that fall into a field or water body are joined to the total amount of points to contain the whole range of points. 

<p class="code">  Join all outcomes</p>
    points AS
    (SELECT *  FROM AHN LEFT OUTER JOIN fields ON (AHN.geom = fields.geoms)),
    
    points1 AS
    (SELECT * FROM points LEFT OUTER JOIN waters ON (points.geom = waters.geomz))

This is all send back as one complete GeoJSON response. 
<p class="code">  final GeoJSON response</p>
    -- Make points:
    SELECT ST_AsGeoJSON(ST_MakePoint(ST_X(ST_Transform(ST_SetSRID(geom, 28992),4326)), ST_Y(ST_Transform(ST_SetSRID(geom, 28992),4326)), heights)) 
    AS geometry, naam, heights, percentage , category1, category2, waternaam, typewater, waterID
    FROM points1
  
 Eventually the response of the request will be a GeoJSON.  
<p class="code">  Example GeoJSON response</p>
    [
            "geometry": {
                "type": "Point",
                "coordinates": [
                    6.6089395293246,
                    53.0818691708253,
                    8.05700016021729
                ]
            },
            "naam": "Zuurpol (de)",
            "heights": 8.05700016021729,
            "percentage": 0.826035566357403,
            "category1": "A1",
            "category2": null,
            "waternaam": null,
            "typewater": null,
            "waterid": null
        },
        {…},
        {…},
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    6.62981923722014,
                    53.0856490864126,
                    4.8439998626709
                ]
            },
            "naam": "Gryze Steen",
            "heights": 4.8439998626709,
            "percentage": 55.5813292359005,
            "category1": null,
            "category2": null,
            "waternaam": null,
            "typewater": "meer, plas, ven, vijver",
            "waterid": "NL.TOP10NL.128375900"
        },
        {…},

![Alt text](/Users/waag/Documents/MGI_Stage/0_Stage_verslag/3_Pictures/Moodboard-02.jpg)

