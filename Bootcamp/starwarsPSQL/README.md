#  PSQL Starwars

#### For help: Reference the Docs: http://www.postgresqltutorial.com/

---

If at any time you need to restart:

- In PSQL Run: ``DROP TABLE jedis;``

- Quit PSQL

- In Terminal Run: ``psql -d jedi_sql -f seed.sql``

- Restart PSQL

- Connect to your database with ``\c jedi_sql``
 

---

 
## In PSQL, run the following commands:



1. Return the names of all the jedi classmates. Output should be: 

         id |        name         | lightsaber_color | years_training | tempted_by_dark_side
        ----+---------------------+------------------+----------------+----------------------
        1 |  Darth AaronT        | white            |             14 | f
        2 |  Aisha Solo          | green            |             12 | f
        3 |  Andrew Fett         | blue             |             15 | f
        4 |  AaronN Sideous      | gray             |             18 | f
        5 |  Chuk-3P0            | purple           |              7 | t
        6 |  Dmitry Binks        | red              |             14 | f
        7 |  Henry Kenobi        | green            |              7 | t
        8 |  Justinbacca         | red              |             19 | f
        9 |  Kevin Windu         | red              |              9 | t
        10 | Rakib-D2            | green            |             14 | t
        11 | Renat Ren           | orange           |              8 | t
        12 | David Maul          | blue             |             19 | f
        13 | Yasmeen-the-Hutt    | red              |             10 | f
        14 | Banu-Gon-Jinn       | blue             |             14 | t
        15 | Jakub-TR8R          | green            |              8 | f
        16 | Zach Skywalker      | purple           |              6 | f
        17 | Ivelisse Tarkin     | orange           |              2 | t
        18 | Dmitry Calrissian   | blue             |             20 | t
        19 | Shariar Gunray      | green            |             14 | t
        20 | Sith Lord Daniel    | red              |             14 | f
        21 | Nikki Solo          | yellow           |            100 | f
        22 | Maria Fett          | brown            |              9 | f
        23 | Nishad Sideous      | purple           |             13 | f
        24 | Connor Binks        | gray             |             12 | f
        25 | Noam Kenobi         | red              |             14 | f
        26 | Kevin Windu         | white            |             12 | t
        27 | Daniyal Calrissian  | blue             |             15 | t
        28 | Nader Skywalker     | red              |              6 | t
        29 | Matthew Windu       | purple           |              8 | f
- Select all the SITH (red lightsabers from jedis) You should be returned:
        
        name
        ------------------
        Dmitry Binks
        Justinbacca
        Kevin Windu
        Yasmeen-the-Hutt
        Sith Lord Daniel
        Henry Kenobi
        Nader Skywalker
        
- There was an assanation by the Sith! All the green lightsaber owners need to be deleted from the records! You should be returned:

        DELETE 5    
    
- SELECT * FROM jedis, you should see the green lightsaber owners missing.  
    
- A New Jedi emerges. Add "The unknown" with a "black" lightsaber who has 100 years training, never tempted by the dark side

- When you select all from jedis, you should notice a new jedi:

        | the unknown | black | 100 | f                    

- The new Jedi trains all of the blue light saber owners. They dobule their years_training instantly. This command should return: 
        
        UPDATE 5    

- The orange lightsaber owners attack the unknown in the night. Ultimate fail. Remove the orange lightsaber owners. This command should return: 
        
        DELETE 2
    
- Concerned, The new Jedi converts the brown and purple lightsaber owners to blue, and doubles their training also... The output should be:

        UPDATE 5
        
- The ultimate Jedi battle takes place. Sadly, all novice Jedi (good and bad) with < 20 years_training need to be deleted from our records. Output should be: 

        DELETE 16

- The unknown one vanishes. Remove them from the records. 

- Who are the last standing Jedis? 

        :cue starwars music: 

  





