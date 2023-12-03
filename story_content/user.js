function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6FHknRdl3Db":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer()

// General Varaibles
player.SetVar("Language","English");
player.SetVar("Num_Qestions","10");

// Question 1
player.SetVar("Q_1","What country gave the Statue of Liberty to the United States?");
player.SetVar("Q_1_Option_1", "Canada");
player.SetVar("Q_1_Option_2", "Germany");
player.SetVar("Q_1_Option_3", "Spain");
player.SetVar("Q_1_Option_N4", "France");
player.SetVar("Q_1_Option_5", "Belgium");

// Question 2
player.SetVar("Q_2","What country is sushi from?");
player.SetVar("Q_2_Option_1", "Hong Kong ");
player.SetVar("Q_2_Option_N2", "Japan");
player.SetVar("Q_2_Option_3", "China");
player.SetVar("Q_2_Option_4", "Malaysia");
player.SetVar("Q_2_Option_5", "Thailand");

// Question 3
player.SetVar("Q_3","What is the capital of Morocco?");
player.SetVar("Q_3_Option_1", "Casablanca");
player.SetVar("Q_3_Option_2", "Fes");
player.SetVar("Q_3_Option_N3", "Rabat");
player.SetVar("Q_3_Option_4", "Meknes");
player.SetVar("Q_3_Option_5", "Marrakesh");

// Question 4
player.SetVar("QN_4","Luxembourg is the capital of which country?");
player.SetVar("Q_4_Option_1", "Germany");
player.SetVar("Q_4_Option_2", "Poland");
player.SetVar("Q_4_Option_3", "Sweden");
player.SetVar("Q_4_Option_4", "Switzerland");
player.SetVar("Q_4_Option_N5", "Luxembourg");

// Question 5
player.SetVar("Q_5","What is the largest planet in our solar system?");
player.SetVar("Q_5_Option_N1", "Jupiter");
player.SetVar("Q_5_Option_2", "Earth");
player.SetVar("Q_5_Option_3", "Venus");
player.SetVar("Q_5_Option_4", "Mercury");
player.SetVar("Q_5_Option_5", "Mars");

// Question 6
player.SetVar("Q_6","Carrots are a good source of which vitamin?");
player.SetVar("Q_6_Option_1", "Vitamin D");
player.SetVar("Q_6_Option_2", "Vitamin C");
player.SetVar("Q_6_Option_3", "Vitamin B");
player.SetVar("Q_6_Option_4", "Vitamin B12");
player.SetVar("Q_6_Option_N5", "Vitamin A");

// Question 7
player.SetVar("Q_7","Water has a pH level of around?");
player.SetVar("Q_7_Option_1", "8");
player.SetVar("Q_7_Option_2", "10");
player.SetVar("Q_7_Option_3", "9");
player.SetVar("Q_7_Option_N4", "7");
player.SetVar("Q_7_Option_5", "6");

// Question 8
player.SetVar("QN_8","How many eyes does a bee have?");
player.SetVar("Q_8_Option_1", "2");
player.SetVar("Q_8_Option_2", "4");
player.SetVar("Q_8_Option_3", "6");
player.SetVar("Q_8_Option_4", "1");
player.SetVar("Q_8_Option_N5", "5");

// Question 9
player.SetVar("Q_9","What is the smallest country in the world?");
player.SetVar("Q_9_Option_1", "Malta");
player.SetVar("Q_9_Option_N2", "Vatican City");
player.SetVar("Q_9_Option_3", "Maldives");
player.SetVar("Q_9_Option_4", "Lebanon");
player.SetVar("Q_9_Option_5", "Iceland");

// Question 10
player.SetVar("Q_10","Who won football World Cup in 2018?");
player.SetVar("Q_10_Option_1", "Brazil");
player.SetVar("Q_10_Option_2", "Argentina");
player.SetVar("Q_10_Option_3", "Chelsea");
player.SetVar("Q_10_Option_N4", "France");
player.SetVar("Q_10_Option_5", "Germany");
}