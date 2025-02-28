import streamlit as st
import pandas as pd
import plotly.express as px

st.write("Harjoitus 4, Visa Poropudas")
# This is my first ever Python excersize!

def get_Titanic_data() :
    df = pd.read_excel('Titanic Data.xlsx')
    return df.set_index("PassengerId")

df = get_Titanic_data()

boolean_alias_mapping = {
      "All" : "",
      "false" : "0",
      "True" : "1"
}

pclass = st.multiselect(
    "Choose Passenger Class", list([1,2,3]), [1, 2, 3])
sex = st.multiselect(
        "Choose Sex", list(["male", "female"]), ["female", "male"]
)
survived = st.selectbox("Survived", options=list(boolean_alias_mapping.keys()))
if not pclass:
        st.error("Please select at least one Passenger Class.")
if not sex:
       st.error("Please select at least one Sex.")
else:
        
        st.subheader("Titanic Passengers")
        filtered_df = df[df['Sex'].isin(sex)]
        filtered_df = filtered_df[df['Pclass'].isin(pclass)]
        if survived != "All":
              filtered_df = filtered_df.loc[df['Survived'] == int(boolean_alias_mapping[survived])]
        st.dataframe(filtered_df.sort_index())

        st.subheader("Passengers by age")
        df = filtered_df[["Age", "Survived", "Pclass", "Sex"]]
        df = df.reset_index() # In order to access PassengerId
        df = df.dropna() ## remove NULL values
        chart_df = df.groupby("Age").sum()
        st.bar_chart(df, x="Age", y=["PassengerId"])

        st.subheader("Passengers by Sex")
        df = filtered_df[["Sex"]]
        df = df.reset_index()
        chart_df = df.groupby(["Sex"]).sum()
        chart_df["Sex"] = chart_df.index
        st.bar_chart(chart_df, x="Sex", y=["PassengerId"])

        st.subheader("Passengers by Passenger Class")
        df = filtered_df[["Pclass", "Sex"]]
        df = df.reset_index()
        chart_df = df.groupby(["Pclass"]).sum()
        chart_df["Pclass"] = chart_df.index
        st.bar_chart(chart_df, x="Pclass", y=["PassengerId"])

        df = filtered_df[["Pclass"]]
        df = df.reset_index()
        st.subheader("Passengers by Passenger Class")
        fig = px.pie(df, names='Pclass', values='PassengerId', title='Passengers by Passenger Class')
        # Display the Pie Chart in Streamlit
        st.plotly_chart(fig)
        df = filtered_df[["Sex"]]
        df = df.reset_index()
        st.subheader("Passenger Gender Distribution")
        fig = px.pie(df, names='Sex', values='PassengerId', title='Gender Distribution')
        st.plotly_chart(fig)