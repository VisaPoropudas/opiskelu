import streamlit as st
import pandas as pd
import altair as alt

st.write("Harjoitus 4, Visa Poropudas")

def get_UK_cinema_data() :
    #BFI_DL_URL = "https://core-cms.bfi.org.uk/media/1761/download/"
    FILE_NAME = "top-200-films-at-world-box-office-2001-2008.xls"
    df = pd.read_excel(FILE_NAME)
    return df.set_index("US DISTRIBUTOR")
def get_Titanic_data() :
    df = pd.read_excel('Titanic Data.xlsx')
    return df.set_index("PassengerId")

df = get_Titanic_data()


pclass = st.multiselect(
    "Choose Passenger Class", list([1,2,3]), [1, 2, 3])
st.write("Ei toiminnassa")
sex = st.multiselect(
        "Choose Sex", list(["male", "female"]), ["female", "male"]
)
st.write("Ei toiminnassa")
if not pclass:
        st.error("Please select at least one Passenger Class.")
if not sex:
       st.error("Please select at least one Sex.")
else:
        
        st.subheader("Titanic Passengers")
        st.dataframe(df.sort_index())

        st.subheader("Passengers by age")
        df = df[["Age", "Survived"]]
        chart_df = df.groupby(["Age"]).sum()
        chart_df["Age"] = chart_df.index
        st.bar_chart(chart_df, x="Age", y=["Survived"])

        st.subheader("Survivors by Sex")
        df = get_Titanic_data()
        df = df[["Sex", "Survived"]]
        chart_df = df.groupby(["Sex"]).sum()
        chart_df["Sex"] = chart_df.index
        st.bar_chart(chart_df, x="Sex", y=["Survived"])

        st.subheader("Survivors by Passenger Class")
        df = get_Titanic_data()
        df = df[["Pclass", "Survived"]]
        chart_df = df.groupby(["Pclass"]).sum()
        chart_df["Pclass"] = chart_df.index
        st.bar_chart(chart_df, x="Pclass", y=["Survived"])

